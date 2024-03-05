import "./Faq.css";
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";
import { useState } from "react";
function Faq() {
  const faqData = [
    { id: 1, ques: "What is the difference between web design and development?", ans: "Website development service and design are two distinct processes. While website development service involves writing code to provide functions and features on a website, website design focuses on designing the layout of a website and producing visually appealing content. While web developers concentrate on functionality, website designers prioritise aesthetics and usability. Designers utilise programmes like Photoshop and Illustrator to make the user experience visually appealing, and programmers use languages like HTML, CSS, JavaScript, and PHP to make dynamic websites that communicate with databases. Web development focuses on how things function, whereas web design focuses on how things look."},
    { id: 2, ques: "What is a front-end website developer?", ans: "A front-end developer in a good development agency has the primary duty to make sure that users of the website can easily interact with the page. They accomplish this by combining programming, design, and technology to code a website’s aesthetic and take care of debugging. The part of websites and online applications that users actually view and interact with is built by front-end developers. Using web languages like HTML, CSS, and JavaScript, a front-end developer develops websites and applications that people can access and utilise." },
    { id: 3, ques: "What is B2B website development?", ans: "The process of creating a business-to-business (B2B) web development company in India is referred to as B2B web development. E-commerce capabilities, database integration, and other features can be included in B2B web development. The objective is to develop a website that makes communication and business transactions between the two parties easy and effective. In order to support intricate interactions between the client and supplier, B2B websites are often built to be highly functional and to be complex enough to demand extensive programming abilities. This can include automated ordering systems, tools for processing payments, systems for managing customers, online businesses, and more." },
    { id: 4, ques: "What are CMS of a web development company?", ans: "As it enables users to manage the information that displays on their website without needing to know HTML code, a Content Management System (CMS) is a potent tool for website development. Without any technical expertise, a user can easily update the material, change layouts and design elements, add new pages and categories, and do much more with CMS software. This is a fantastic method for anyone with no technical knowledge to be in charge of all the many elements of their website. There are many different CMS systems available, from straightforward template-based solutions to more intricate ones requiring substantial system administration or utilising databases. Your individual needs will determine the option you select." },
    { id: 5, ques: "What is coding in website development?", ans: "Coding is a significant part of website development, which involves programming languages like HTML, CSS and JavaScript. It defines how the website will look and function. Coding helps create webpages that are organized and easy to read. The code also provides instructions to the browser so it knows how to display the content on the page. Code is written by developers who take into account aesthetics, usability, accessibility and other design principles when crafting websites. Without coding, websites would not be able to provide users with an easy-to-navigate interface or include rich functionalities such as animations, interactivity or dynamic elements like search bars and forms. Coding is a vital part of website development as it facilitates structuring content in a way that makes sense for users and works as intended when accessed from multiple devices and web browsers." },
    { id: 6, ques: "What is WordPress website development?", ans: "The process of developing a website using the well-liked content management system WordPress is known as WordPress website development. This includes planning the layout, creating unique plugins and functionality, including external services and APIs, and speed and performance-enhancing optimization including custom software development. WordPress is a user-friendly platform that enables developers to build remarkable websites in less time than it would take to design a conventional website, from straightforward landing pages to substantial e-commerce websites. Without having any coding experience, site owners may easily and quickly add functionality by using established themes and plugins. WordPress is perfect for companies trying to expand their web presence because of its clean codebase and simple customization options." },
    { id: 7, ques: "What is dynamic website development?", ans: "Dynamic website development is the process of creating a website that utilizes web technologies to generate content in response to user interaction. This interaction can come from either the server or the client side, which provides a way for developers to create websites that are tailored to each user based on their preferences and interactions. Dynamic websites are more flexible, powerful, and interactive than static websites, as they can react to changes in data and provide real-time feedback on user interactions. Dynamic website development requires specific programming languages, frameworks, libraries and databases, but they offer multi-functionality and extensibility that allows them to be adapted for many different uses. By coding in such a way that the application pulls data from external sources, dynamic websites are capable of delivering tailored content responses for each user." },
    { id: 8, ques: "What is hosting in website development?", ans: "The process of providing space, services, and technology necessary for a website to be visible on the Internet is known as hosting in the context of website development. In order to establish an online presence, entails renting a domain name or web server, buying SSL certificates, and configuring the web server. Additionally, it necessitates obtaining hosting space from a web host firm, registering the domain name with ICANN, and frequently updating the DNS settings of the domain to properly redirect traffic from the provider’s network to the user’s own website. Users can publish, maintain, and guarantee the accessibility of their websites for all visitors through hosting. Accessible, secure, durable, and well-performing websites are all benefits of good hosting." },
    { id: 9, ques: "What is a domain in website development services?", ans: "A domain is an internet address that is used to identify and find a website as it is being developed. It normally consists of two components, one of which is a top-level domain like.com or.org and the other of which is the name of the website. In order to register a domain, you must first purchase it from a registrar, who will then provide you with continuing services like DNS hosting, email forwarding, and renewal notifications. Registrars charge different prices for domain name registration and renewal, but it’s typically not very expensive. Any successful web development project requires domain ownership because it gives you control over where your content is housed and what services you can use to maintain your online presence." },
  ];
  const [activeId, setActiveId] = useState(null); // Store the ID of the active item

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id); // Toggle the activeId
  };
  // const [height, setHeight] = useState(false);
  // const toggle1 = () => {
  //   setHeight(!height);
  // };
  const Faqitem = () => {
    return (
      <>
        {/* {faqData.map((item) => {
          return (
            <div className={`faq-item ${height ? "active" : ""}`}>
              <div className="faq-item-header" onClick={toggle} key={item.id}>
               {item.ques}
              </div>
              <div className='faq-item-body'>
                <div className="faq-item-body-content">{item.ans}</div>
              </div>
            </div>
          );
        })} */}
         {faqData.map((item) => {
          const isActive = activeId === item.id;
          return (
            <div className={`faq-item ${isActive ? "active" : ""}`} key={item.id}>
              
              <div className="faq-item-header" onClick={() => toggle(item.id)}>
                {item.ques}
                <div className="expand-btn">
              <HiChevronDown style={{display: isActive ? 'none' : 'block'}}/>
              <HiChevronUp style={{display: isActive ? 'block' : 'none'}}/>
              </div>
              </div>
              <div className={`faq-item-body ${isActive ? "active" : ""}`}>
                <div className="faq-item-body-content">{item.ans}</div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="faq-container">
        <h2>FAQ</h2>
        <h4>Frequently Asked Question</h4>
        <Faqitem />
        
      </div>
    </>
  );
}
export default Faq;
