const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = "<div></div>";
}

document.addEventListener('DOMContentLoaded', () => {

  // FAQ 展开/收起功能
  const faqItems = document.querySelectorAll('.faq-question');

  faqItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const button = e.currentTarget as HTMLButtonElement;
      const icon = button.querySelector('.faq-icon') as HTMLElement;
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      // 切换展开状态
      button.setAttribute('aria-expanded', (!isExpanded).toString());

      // 旋转图标
      if (icon) {
        icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
      }

      // 这里可以添加展开内容的逻辑
      console.log('FAQ项目被点击:', button.textContent);
    });
  });

  // 下载按钮现在直接在HTML中设置链接和新窗口打开

  // 平滑滚动到页面顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 导航栏Logo点击回到顶部
  const chromeLogo = document.querySelector('.chrome-logo');
  if (chromeLogo) {
    chromeLogo.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToTop();
    });
  }

  // 移动端菜单切换
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      const button = e.currentTarget as HTMLElement;
      navLinks.classList.toggle('nav-links-open');
      button.classList.toggle('menu-open');
    });
  }

  // 滚动时导航栏效果
  const header = document.querySelector('.header') as HTMLElement;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (header) {
      if (currentScrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
      }
    }
  });

  // 特色卡片悬停效果
  const featureCards = document.querySelectorAll('.feature-card');

  featureCards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
      const element = e.currentTarget as HTMLElement;
      element.style.transform = 'translateY(-4px)';
    });

    card.addEventListener('mouseleave', (e) => {
      const element = e.currentTarget as HTMLElement;
      element.style.transform = 'translateY(0)';
    });
  });

  // 语言选择器功能
  const languageBtn = document.querySelector('.language-btn');

  if (languageBtn) {
    languageBtn.addEventListener('click', () => {
      console.log('语言选择器被点击');
      // 这里可以添加语言切换功能
    });
  }

  // 添加页面加载动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        element.style.animation = 'fadeInUp 0.6s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 观察需要动画的元素
  const animatedElements = document.querySelectorAll('.feature-card, .google-feature, .section-title');
  animatedElements.forEach(el => {
    const element = el as HTMLElement;
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    observer.observe(el);
  });

  console.log('Chrome网站克隆加载完成');
});
