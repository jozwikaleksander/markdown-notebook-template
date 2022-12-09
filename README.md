<<<<<<< HEAD
http://aleksanderjozwik.me/notatki_z_fizyki/fizyka.html

komenda:  pandoc --mathjax -c style.css -s fizyka.md -o fizyka.html#� �n�o�t�a�t�k�i�_�z�_�f�i�z�y�k�i�
�
�
=======
# 📝 Markdown Notebook Template

![](docs/screenshot.png)

Notebook template made in markdown and exported to HTML via Pandoc. It also uses **MathJax**, so you can write your math formula's in it.

## 📦 Dependencies

- pandoc ([link to the pandoc's website](https://pandoc.org/))

## 🖋 Usage

1. Clone repo

        git clone https://github.com/jozwikaleksander/markdown-notebook-template.git

2. Write your notes in **index.md file** and add your images to **img directory**.

3. Convert **index.md to HTML** via command below

    pandoc --metadata title="Notebook title" --mathjax="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" -c css/style.css -s index.md -o index.html

4. Repeat **steps 2 and 3** until your done.

## 👤 Credits
Project was made by Aleksander Jóźwik ([@jozwikaleksander](https://github.com/jozwikaleksander)).
>>>>>>> b156e3e75935e51081b442bf53637968ccf05d12
