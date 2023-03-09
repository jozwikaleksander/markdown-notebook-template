$("document").ready(() => {
  const toc = $('#TOC')[0];
  const tocMenu = toc.cloneNode(true);
  tocMenu.classList.add("toc-menu");
  tocMenu.removeAttribute("id");
  tocMenu.removeAttribute("role");
  tocMenu.classList.add("disabled");
  document.body.appendChild(tocMenu);

  tocMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      tocMenu.classList.add("disabled");
    }
  });

  const menu = document.createElement("div");
  menu.classList.add("menu");
  document.body.appendChild(menu);

  const scrollBtn = document.createElement("a");
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollBtn.href = "#";
  scrollBtn.classList.add("scroll-button");
  scrollBtn.classList.add("disabled");
  menu.appendChild(scrollBtn);

  const tocBtn = document.createElement("a");
  tocBtn.innerHTML = '<i class="fas fa-list"></i>';
  tocBtn.classList.add("toc-button");
  menu.appendChild(tocBtn);

  $(window).scroll(function () {
    if ($(window).scrollTop() > $(toc).height()) {
      $(".scroll-button").removeClass("disabled");
    } else {
      $(".scroll-button").addClass("disabled");
    }
  });

  tocBtn.addEventListener("click", () => {
    tocMenu.classList.toggle("disabled");
  });

  document.addEventListener("click", (e) => {
    if (!tocMenu.contains(e.target) && !tocBtn.contains(e.target)) {
      tocMenu.classList.add("disabled");
    }
  });
});
