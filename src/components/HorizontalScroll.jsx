import  { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../css/HorizontalScroll.css'; // تأكد من وجود هذا الملف وتعديله حسب الحاجة
import image1 from '../images/profilePhoto.svg';
import image2 from '../images/blackboard-svgrepo-com.svg';
import image3 from '../images/school-svgrepo-com.svg';

const HorizontalScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // العثور على عنصر المحتوى
    const scrollContent = document.querySelector('.scroll-content');
    const scrollWidth = scrollContent.scrollWidth;

    // إعداد التمرير الأفقي
    gsap.to('.scroll-content', {
      x: () => `-${scrollWidth - window.innerWidth}px`,
      ease: 'none',
      duration: 20, // مدة التمرير الكامل
      repeat: -1, // التكرار المستمر
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % (scrollWidth - window.innerWidth)),
      },
      scrollTrigger: {
        trigger: '.scroll-section',
        pin: true,
        scrub: 1,
        end: () => `+=${scrollWidth}px`,
        markers: true, // لتصحيح الأخطاء، يمكنك إيقافها عند النشر
      },
    });
  }, []);

  return (
    <section className="scroll-section">
      <div className="scroll-container">
        <div className="scroll-content">
          <img src={image1} alt="Image 1" />
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
          <img src={image2} alt="Image 4" />
          <img src={image1} alt="Image 5" />
          <img src={image3} alt="Image 6" />
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
