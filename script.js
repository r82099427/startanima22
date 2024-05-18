document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = document.querySelectorAll("div.slide[data-src]");
  lazyImages.forEach(function (div) {
    var img = new Image();
    img.src = div.getAttribute("data-src");
    div.appendChild(img);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = document.querySelectorAll("div.slide[data-src]");
  lazyImages.forEach(function (div) {
    var img = new Image();
    img.src = div.getAttribute("data-src");
    div.appendChild(img);
  });

  // 添加點擊事件處理程序
  document.body.addEventListener("click", function () {
    setTimeout(function () {
      window.location.href = "http://www.yeonglong.com.tw/"; // 將 "newpage.html" 替換為目標頁面的 URL
    }, 1000); // 延遲 1 秒 (1000 毫秒)
  });
});

// Tamino Martinius - All rights reserved

// Copyright © 2013 Tamino Martinius (http://zaku.eu)
// Copyright © 2013 Particleslider.com (http://particleslider.com

// Terms of usage: http://particleslider.com/legal/license

var init = function () {
  var isMobile =
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().indexOf("mobile") >= 0;
  var isSmall = window.innerWidth < 1000;

  var ps = new ParticleSlider({
    // ptlGap: isMobile || isSmall ? 3 : 0,
    // ptlSize: isMobile || isSmall ? 3 : 1,
    // width: 1e9,
    // height: 1e9,
    ptlGap: isMobile || isSmall ? 8 : 2, // 增大粒子間的間隔
    ptlSize: isMobile || isSmall ? 3 : 1, // 增大粒子的大小
    // width: window.innerWidth, // 使用窗口寬度
    // height: window.innerHeight, // 使用窗口高度
    width: isMobile || isSmall ? window.innerWidth * 2 : window.innerWidth, // 使用窗口寬度，對於小屏幕進行縮放
    height: isMobile || isSmall ? window.innerHeight * 2 : window.innerHeight, // 使用窗口高度，對於小屏幕進行縮放
  });

  // var gui = new dat.GUI();
  // gui
  //   .add(ps, "ptlGap")
  //   .min(0)
  //   .max(5)
  //   .step(1)
  //   .onChange(function () {
  //     ps.init(true);
  //   });
  // gui
  //   .add(ps, "ptlSize")
  //   .min(1)
  //   .max(5)
  //   .step(1)
  //   .onChange(function () {
  //     ps.init(true);
  //   });
  // gui.add(ps, "restless");
  // gui.addColor(ps, "color").onChange(function (value) {
  //   ps.monochrome = true;
  //   ps.setColor(value);
  //   ps.init(true);
  // });

  window.addEventListener
    ? window.addEventListener(
        "click",
        function () {
          ps.init(true);
        },
        false
      )
    : (window.onclick = function () {
        ps.init(true);
      });
};

var initParticleSlider = (function () {
  var psScript = document.createElement("script");
  psScript.addEventListener
    ? psScript.addEventListener("load", init, false)
    : (psScript.onload = init);
  psScript.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js";
  psScript.setAttribute("type", "text/javascript");
  document.body.appendChild(psScript);
})(
  window.addEventListener
    ? window.addEventListener("load", initParticleSlider, false)
    : (window.onload = initParticleSlider)
);
