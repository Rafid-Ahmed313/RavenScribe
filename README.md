
<p align="center">
  <img src="https://raw.githubusercontent.com/Rafid-Ahmed313/RavenScribe/refs/heads/master/Frontend/public/icons/logo.png" alt="RavenScribe Logo" width="200"/>
</p>


# 🖋️ RavenScribe — The Open Source Platform for Independent Writers

**RavenScribe** is a powerful open-source blogging platform where anyone can write, publish, and earn — designed to be the **YouTube of blogging**.

> ✨ Started in 2020 during the early COVID era, RavenScribe was built to give a voice to creators who wanted a platform free from gatekeeping — and supported by open contributions from developers around the world.

---

## 🚀 What is RavenScribe?

RavenScribe is a community-driven platform that allows:

- ✍️ **Any user** to sign up and publish articles
- 💰 **Writers to earn** through views, ads, and affiliate links
- 🌐 **Developers to contribute** to an open platform that empowers creators

Inspired by YouTube's creator-first economy, RavenScribe brings that model to the world of written content.

---

## 🛠️ Tech Stack

Built with modern full-stack technologies:

| Layer         | Technology                            |
|---------------|----------------------------------------|
| 🧠 Backend     | Python, Django, Django REST Framework   |
| 🖼️ Frontend    | React.js, HTML, CSS, JavaScript         |
| 🗄️ Database    | PostgreSQL                              |
| 🔗 API Layer   | RESTful API using DRF                   |
| 🔐 Auth        | Django AllAuth / JWT (customizable)     |
| 📦 Deployment  | Gunicorn,Nginx    |

---

## 📦 Features

- 🧑‍💻 Account system for writers and readers
- ✍️ Markdown & Rich Text editor
- 💸 Monetization for writers (ad revenue + affiliate support)
- 📊 Article analytics (views, engagement)
- 🔍 SEO-friendly article pages
- 🧾 RESTful APIs for full frontend/backend decoupling
- 🖼️ Image upload & article thumbnail support
- 🔒 Secure user auth, CSRF protection, token-based APIs

---

## 📈 Business Model

Writers can earn from:

- 📢 Ads on their articles (CPM/affiliate-based)
- 🛍️ Affiliate links integration
- 🔁 Future potential: referrals, paid subscriptions

The idea: **Writers should get paid for their words, just like creators on YouTube.**

---

## 🌍 Get Started (Developer Setup)

### 🔧 Backend (Django)

```bash

git clone https://github.com/Rafid-Ahmed313/RavenScribe.git
cd RavenScribe/backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
