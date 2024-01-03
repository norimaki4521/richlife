// *************************
// アコーディオン
// *************************
jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if (jQuery(this).parent().hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
});

// *************************
// ハンバーガーメニュー(jQuery)
// *************************
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer").toggleClass("is-checked");
});

// *************************
// ハンバーガーメニュー（リンククリックでドロワーを閉じる）
// *************************
jQuery('#js-drawer a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer").removeClass("is-checked");
});

// *************************
// スムーススクロール
// *************************
jQuery('a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing" // swing or linear
  );
});
