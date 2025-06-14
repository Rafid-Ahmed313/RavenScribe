import React, { Component } from 'react'
import $ from 'jquery'
import Recommendation from '../../public/components/Recommendation'
import Drecommendation from '../../public/components/downbar_components/Drecommendation'
import NavigationBar from '../../public/components/Navigation'
import Downbar from '../../public/components/Downbar'
import axios from 'axios';
import Parser from 'html-react-parser';


// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class Blogpage extends Component {
    state = {
        blog: [],
    }

    constructor(props) {
        super(props)
        this.clicked = this.clicked.bind(this)
        this.content = ""


    }

    id() {
        console.log("nothing")
    }
    clicked=(event, elem, link)=>{

        let x = event.clientX
        let y = event.clientY
        elem.addEventListener("mouseup", (e) => {
            if (e.clientX == x && e.clientY == y) {
                window.location = link
            }
        })
        // console.log(event, elem, link)



    }
    // htmlDecode(content) {
    //     let e = document.createElement('div');
    //     // e.setAttribute("class", "article")
    //     // e.setAttribute("name", "article")
    //     e.innerHTML = content;
    //     return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;

    // }



    componentDidMount() {

        let query = ((window.location.href.split("/")))
        let sno=query[query.length-1]
        // let query = queryp.replace(/^./, queryp[0].toUpperCase());
        // while (this.state.blog.length !== 0) {

        axios.get(`http://127.0.0.1:8000/api/SEO_FRIENDSLY_SLUG/${sno}`).then(res => {
            // this.setState({ Blog: res.data })
            console.log(res.data.Content)
            this.setState({ blog: res.data })

            // const fieldValue = (
            //     <div dangerouslySetInnerHtml={{ __html: this.state.blog.Content }} className="article" name="article" />
            // );
            // document.getElementsByClassName("articles")[0].innerHTML = fieldValue
            document.getElementsByClassName("article")[0].innerHTML = res.data.Content



        }).catch(function (err) { console.log(err.response.data) });
        console.log(this.state.blog.Content)
        // let update_cont = async function () {
        //     while (inartcontent === "") {
        //         if (inartcontent === "") {
        //             inartcontent = await this.state.blog.content
        //         }
        //         else {
        //             break
        //         }


        //     }

        // }
        // update_cont()




        // }



        // window.onload = () => {



            var a = document.querySelectorAll('.article')
            var add = document.querySelectorAll('.space')

            for (let i = 0; i < a.length; i++) {
                if (a[i].innerText == "") {
                    a[i].style.display = "none"
                    add[i + 1].style.display = "none"
                }
            }


            $('document').on('ready', function () {
                let a = document.getElementById('ham');
                a.addEventListener('click', rotate)


                function rotate() {


                    a.style.transform = 'rotate(-90deg)';

                    setTimeout(() => {
                        a.style.transform = 'rotate(0deg)';

                    }, 500);

                }

                $('#searchcross').click(function () {
                    // $('.searchbar').css({ 'z-index': '10', 'visibility': 'visible' })
                    $('.searchbar').css({
                        'z-index': '-50', 'visibility': 'hidden', 'opacity': '0', 'display': 'none'
                    })

                    // $('.searchbar').hide()

                })
                $('.search-image').click(function () {
                    $('.searchbar').css({ 'z-index': '1001', 'visibility': 'visible', 'opacity': '.99', 'display': 'flex' })
                    // $('.searchbar').show()

                })

                $('.navlinks a li').on('mouseover', function () {


                    $(this).children('.navlinks a li div ').css({

                        'visibility': 'visible',
                        'opacity': '1',
                        'transform': 'translateX(60px)',
                    })

                }).on('mouseleave', function () {
                    $(this).children('.navlinks a li div ').css({

                        'transform': 'translateX(40px)',
                        'opacity': '0',
                        'visibility': 'hidden'
                    })
                })

                const navslide = () => {
                    const burger = document.querySelector('#ham')
                    const nav = document.querySelector('.navlinks')
                    const ham = document.querySelector('#hamcross')
                    burger.addEventListener('click', () => {
                        nav.classList.toggle('active')
                    })
                    ham.addEventListener('click', function () {
                        nav.classList.toggle('active')
                    })
                }
                navslide()



            })
            // let button = document.querySelector('.input button')
            // button.addEventListener('click', function () {
            //     let searched = document.querySelector('input')
            //     searched.value = '';

            // })




            var prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
                let prev = document.querySelector('#pagination-prev .pagination-title')
                let next = document.querySelector('#pagination-next .pagination-title')
                let site = document.querySelector('.site-content')
                // prev.style.left = "0px"
                // next.style.right = "0px"
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
                    prev.style.left = "0px"
                    next.style.right = "0px"


                } else {
                    prev.style.left = "-80px"
                    next.style.right = "-80px"


                }
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("jsnav").style.top = "0px";
                } else {
                    document.getElementById("jsnav").style.top = "-60px";
                }
                prevScrollpos = currentScrollPos;
            }



            $('.items .moreon').on('mouseover', function () {
                $(this).children('.items .moreon .text').css({ 'visibility': 'visible', 'transform': 'translateY(50px)', 'opacity': '1' })




            }).on('mouseleave', function () {
                $('.items .moreon .text').css({ 'transform': 'translateY(100px)', 'opacity': '0', 'visibility': 'hidden' })



            })
            let scroll1 = document.querySelector('.wrapper')
            scroll1.scrollTo(460, 0)


            let back = document.getElementsByClassName('pagination-blog')
            const bg1 = back[0].style.background
            back[0].style.setProperty('background', "transparent")
            const bg2 = back[1].style.background
            back[1].style.setProperty('background', 'transparent')

            let paginations = document.querySelectorAll('.pagination-blog')[0]
            let paginations2 = document.querySelectorAll('.pagination-blog')[1]
            paginations.onmouseover = function () {
                this.style.width = "40em";

                this.style.background = bg1;

            }
            paginations2.onmouseover = function () {
                this.style.width = "40em";

                this.style.background = bg2;



            }
            paginations.onmouseleave = function () {
                this.style.setProperty('background', "transparent")
                this.style.width = 'auto'
                this.style.setProperty('background', "transparent")

            }
            paginations2.onmouseleave = function () {
                this.style.setProperty('background', "transparent")
                this.style.width = 'auto'



            }

            $('.pagination-blog').on('mouseover', function () {

                $(this).children('.pagination-title').css({
                    'background-color': 'black',
                    'opacity': '.4',
                    'color': 'white'
                })

                $(this).children('.pagination-text').css({
                    'display': 'block',
                    'visibility': 'visible'
                })
            }).on('mouseleave', function () {

                $(this).children('.pagination-title').css({
                    'background-color': 'white',
                    'opacity': '1',
                    'color': 'black'
                })

                $(this).children('.pagination-text').css({
                    'display': 'none',
                    'visibility': 'hidden'
                })

            })

            $('.pagination-text button').on('mouseover', function () {
                $(this).children('.pagination-text button span').css({
                    'top': '-2.89em'
                })

            }).on('mouseleave', function () {
                $(this).children('.pagination-text button span').css({
                    'top': '-.5em'
                })

            })

            const slider = document.querySelector('.writer_recommendation');
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });
            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('active');
            });
            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('active');
            });
            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;

                const walk = (x - startX) * 1; //scroll-fast

                slider.scrollLeft = scrollLeft - walk;

                // console.log(walk);
            });




        }












    // }
    render() {
        return (
            <>

                <div id="pagination-prev" className="pagination-blog" onClick={this.id}
                    style={{ background: `url('https://images.unsplash.com/photo-1651212989224-3c5d494a524f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80') center center/cover` }}>
                    <a href={"/blog/{{prev}}"} className="pagination-title">


                        Previous blog
                    </a>




                    <div className="pagination-text">

                        <span className="pagintext">

                            this is text


                        </span>


                        <br />
                        <button className="paginbtn" style={{ backgroundColor: 'white' }}>
                            <span style={{ fontWeight: '600', color: 'black' }}> View
                                blog</span>
                            <span><img src="../icons/arrow.png" style={{ height: 1 + 'em', transform: 'rotate(180deg)' }}
                                alt="" /></span></button>



                    </div>



                </div>

                <div id="pagination-next" className="pagination-blog" onClick={this.id}
                    style={{ background: `url('https://images.unsplash.com/photo-1651212989224-3c5d494a524f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80') center center/cover` }}>
                    <a href="/blog/{{next}}" className="pagination-title">

                        Next blog


                    </a>
                    <div className="pagination-text">
                        <span className="pagintext">
                            this is next text

                        </span>
                        <br />
                        <button className="paginbtn" style={{ backgroundColor: 'white' }}>
                            <span style={{ fontWeight: '600', color: 'black' }}> View
                                blog</span>
                            <span><img src="../icons/arrow.png" style={{ height: 1 + 'em' }} alt="" /></span></button>


                    </div>


                </div>










                {/* <!-- ----------------------------------------------------- --> */}
                <div className="site-content">
                    <div className="blog-heading">
                        {this.state.blog.Title}


                    </div>

                    <img src={this.state.blog.Thumbnail} alt="" id="thumbnail" />
                    <div className=" space">
                        advertisement
                    </div>
                    <div className="concept">
                        {this.state.blog.Concept}



                    </div>
                    <div className=" space">
                        advertisement
                    </div>



                    {/* <div className="article" dangerouslySetInnerHTML={{ __html: this.state.blog.Content }}>
                    </div> 
                     */}


                    {/* <div className="article"> */}
                    <div class="article" name="article">

                        {/* <div dangerouslySetInnerHTML={{ __html: (this.state.blog.Content) }} className="article" name="article">
                    </div> */}

                        {/* {this.state.blog.Content} */}






                    </div>



                    {/* <div className="article">
                            <div className="article-heading">
                                making someone die and eat something else
                            </div>
                            <img src="https://images.unsplash.com/photo-1530936541512-05ec5b6c6e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" height="700px" width="1000px" />

                            <div className="blog-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, hic tempore maxime magnam doloremque sapiente est voluptatibus! Sequi, temporibus eaque.

                            </div>



                        </div> */}
                    {/* </div> */}

                    {/* </div> */}




































                    <div className="article-heading">
                        If you like this topic, you may also like
                    </div>
                    <div className="affiliate">
                        <div className="classNamees" onClick={this.id}>
                            <div className="products" style={{ background: `url('https://images.unsplash.com/photo-1651212989224-3c5d494a524f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80') center center/cover` }}>

                            </div>
                            <span className="products-span"><a href="aff1"
                                style={{ color: 'black' }}>affiliate_name</a>
                            </span>

                        </div>
                        <div className="classNamees" onClick={this.id}>
                            <div className="products" style={{ background: `url('https://images.unsplash.com/photo-1651212989224-3c5d494a524f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80') center center/cover` }}>

                            </div>
                            <span className="products-span"><a href="aff2"
                                style={{ color: 'black' }}>affiliate_name2</a>
                            </span>

                        </div>




                    </div>
                    <div className="space">
                        advertisement
                    </div>

                    <div className="article-heading" style={{ color: 'rgb(53, 53, 53)' }}>
                        IF YOU LIKED OUR BLOG , ALSO CHECK THESE OUT

                    </div>



                    {/* <!-- //////////////////////////////////////////////////////// --> */}





                </div>
                {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators" style={{ bottom: 175 + 'px' }}>
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="items">


                                <div className="on">
                                    <a href="/blog/{{recomend.auto_increment_id}}">
                                        <div className="moreon" style={{ background: `url('{{recomend.thumbnail}}') center center/cover` }}>
                                            <div className="text">

                                            </div>

                                        </div>
                                        <div className="text">

                                        </div>
                                    </a>

                                </div>




                            </div>


                        </div>
                        <div className="carousel-item">
                            <div className="items">

                                <div className="on">
                                    <a href="/blog/{{recomend.auto_increment_id}}">
                                        <div className="moreon" style={{ background: `url('{{recomend.thumbnail}}') center center/cover` }}>
                                            <div className="text">
                                                View post &rarr;
                                            </div>

                                        </div>
                                        <div className="text">
                                            this is recommended
                                        </div>
                                    </a>

                                </div>






                            </div>


                        </div>
                        <div className="carousel-item">
                            <div className="items">

                                <div className="on">
                                    <a href="/blog/{{recomend.auto_increment_id}}">
                                        <div className="moreon" style={{ background: `url('{{recomend.thumbnail}}') center center/cover` }}>

                                            <div className="text">
                                                View post &rarr;
                                            </div>

                                        </div>
                                        <div className="text">
                                            this is recommended
                                        </div>
                                    </a>

                                </div>





                            </div>


                        </div>

                    </div>
                </div> */}

                <Recommendation />
                <Downbar/>



            </>
            // <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            //     integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            //     crossorigin="anonymous"></script>
            // <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            //     integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            //     crossorigin="anonymous"></script>
            // <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            //     integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            //     crossorigin="anonymous"></script>

        )
    }
}


export default Blogpage
