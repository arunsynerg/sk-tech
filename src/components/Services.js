import "./Services.css";
import bgimg from "../Assets/service-pattern.png.webp";
import bgimg1 from "../Assets/app-development.svg";
import customerser from "../Assets/customer-service.svg";
import appdevelop from "../Assets/app-development.svg";
import responsive from "../Assets/responsive.svg";
import contentw from "../Assets/content-writing.svg";
import logo from "../Assets/logo-design.svg";
import server from "../Assets/server.svg";
import onlineshop from "../Assets/online-shopping.svg";
import rupees from "../Assets/rupee-1.svg";
import time from "../Assets/time.svg";
import verify from "../Assets/verify.svg";
import startup from "../Assets/startup.svg";

function Services() {
  var econstyle = {
    width: "100%",
    height: "350px",
    backgroundimage: "url(" + { bgimg } + ")",
  };

  const servicedata = [
    {
      img: bgimg1,
      title: "Web Design",
      desc: " ",
      backdata:
        "Incorporate the best website designs using high-end User Interaction technologies like Adobe XD, Figma, etc. Launch your own global identity with our experts, who carry great expertise in web design from scratch to end.",
    },
    {
      img: customerser,
      title: "24*7 Free Support",
      desc: "(Phone/Chat/Email)",
      backdata:
        "Our clients are our priority, and we are active across all communication channels to provide full customer support. Any problem in services like website designing and e-commerce development will be addressed with utmost priority. We have a 100% record in customer support.",
    },
    {
      img: appdevelop,
      title: "Web Development",
      desc: " ",
      backdata:
        "We are the best web design company in India with highly experienced coders. Our way of working is very cool, and our potential to deliver top-notch websites is commendable. We focus on demanding technologies, frameworks, and tools.",
    },
    {
      img: responsive,
      title: "100% Responsive Website",
      desc: " ",
      backdata:
        "Website responsiveness is a very critical parameter for the success of your business venture. Get your device responsive website design to reach your potential audience across all devices. Trending technologies and frameworks are available for 100% website responsiveness.",
    },
    {
      img: contentw,
      title: "Content Writing",
      desc: " ",
      backdata:
        "We provide content writing services to cater to all your content requirements under one roof. It includes blog writing for websites, web content writing, marketing content, research articles, press release, product descriptions, etc.",
    },
    {
      img: logo,
      title: "Logo Designing",
      desc: " ",
      backdata:
        "Our logo design service is for multiple industries, such as real estate, education, financial institutions, food, hospitality, information technology, fashion, and more. We also provide custom logo design services.",
    },
  ];

  return (
    <div className="service">
      <h4>Our Services</h4>
      <p>
        We are a One-Stop Solution for delivering the best web design and
        development services. We render customized and affordable web design
        facilities to suit your requirements. Choose the best plans for building
        a responsive web design according to your needs.
      </p>
      <p>&nbsp;</p>
      <div className="Service-card-container">
        {servicedata.map((data) => {
          return (
            <div className="service-card">
              <div className="service-card-frontdata">
                <div className="bgimg">
                  <img src={bgimg} alt="bgimg"/>
                </div>
                <div className="service-card-data">
                  <img src={data.img} />
                  <h6>
                    {data.title}
                    <br />
                    <span>{data.desc}</span>
                  </h6>
                  {/* <p>{data.desc}</p> */}
                </div>
              </div>
              <div className="service-card-backdata">
                <p>{data.backdata}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="reason-container">
        <h5>Why Choose US</h5>
        <h2>The Top Web Design Developers in India!</h2>
        <div className="e-container">
        {/* <div className="leftcon"> */}
        <div className="reason-card server">
          <div className="reason-card-frontdata">
            <div className="bgimg">
              <img src={bgimg} />
            </div>
            <div className="reason-card-data">
              <img src={server} />
              <p>
              1 Year Free Domain/Hosting 
                
              </p>
            </div>
          </div>
        </div>
        <div className="reason-card shop">
          <div className="reason-card-frontdata">
            <div className="bgimg">
              <img src={bgimg} />
            </div>
            <div className="reason-card-data">
              <img src={onlineshop} />
              <p>
              Dynamic Websites with attractive web designs
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="reason-card rupees">
          <div className="reason-card-frontdata">
            <div className="bgimg">
              <img src={bgimg} />
            </div>
            <div className="reason-card-data">
              <img src={rupees} />
              <p>
              Our design and development services are pocket friendly – Starting from ₹ 7,999/- Only (18% GST applicable)
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="reason-card time">
          <div className="reason-card-frontdata">
            <div className="bgimg">
              <img src={bgimg} />
            </div>
            <div className="reason-card-data">
              <img src={time} />
              <p>
              Project delivery on time with proper analysis and development of a schedule for project completion.
                <br />
              </p>
            </div>
          </div>
        {/* </div> */}
        </div>
       {/* <div className="rightcon"> */}
       <div className="reason-card verify">
          <div className="reason-card-frontdata">
            <div className="bgimg">
              <img src={bgimg} />
            </div>
            <div className="reason-card-data">
              <img src={verify} />
              <p>
              High-end services with 100% expert assistance and a wide range of modern tools and parameters.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="reason-card call">
          <div className="reason-card-frontdata">
            <div className="bgimg">
              <img src={bgimg} />
            </div>
            <div className="reason-card-data">
              <img src={customerser} />
              <p>
              24*7 Hours call support 
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="reason-card startup">
          <div className="reason-card-frontdata">
            <div className="bgimg">
              <img src={bgimg} />
            </div>
            <div className="reason-card-data">
              <img src={startup} />
              <p>
              Innovation and creativity are our secrets to web designing and development success.
                <br />
              </p>
            </div>
          </div>
        {/* </div> */}
       </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
