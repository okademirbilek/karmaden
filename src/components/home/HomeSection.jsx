import React from "react";
import { Icon } from "react-icons-kit";
import { users } from "react-icons-kit/fa/users";
import { clockO } from "react-icons-kit/fa/clockO";
import { shield } from "react-icons-kit/fa/shield";
import { tree } from "react-icons-kit/fa/tree";

const HomeSection = () => {
  const data = [
    {
      id: "home-1",
      icon: "users",
      title: "Expert Team",
      text: "We open the door to perfect services with our expert team to provide the best quality products to the consumer in the marble sector. To meet the consumer with the Kar Maden brand and to make you meet with the more successful shopping process is the greatest desire of our expert team! Our team, which has spent many years in the marble sector, offers flawless solutions to meet the demands of you with maximum quality!",
    },
    {
      id: "home-2",
      icon: "clockO",
      title: "Quality guarantee",
      text: "Kar Maden, which is moving towards becoming the most successful brand in Turkey thanks to its marble quality, also aims to carry its success to international markets. Acting with the understanding that quality is possible by using the right techniques and environmentally friendly methods. Choosing marble with Kar Maden guarantee to feel the quality will be completely different!",
    },
    {
      id: "home-3",
      icon: "shield",
      title: "Save Time",
      text: "Never forget that working with a brand that has proven its success in marble in national and international markets will save your time. As Kar Maden, we act in a planned and selfless way throughout our work. We know that unplanned work will negatively affect not only our service to the consumer, but also quality. With this understanding, we define our most valuable principle as using time correctly.",
    },
    {
      id: "home-4",
      icon: "tree",
      title: "Eco Friendly",
      text: "Our main priority in marble production processes is to protect the nature, not profitability. Human life can’t be sustainable in a situation where nature will be damaged. Moreover, we never approve of solutions against nature that will prevent the continuity of marble production! We make environmentally friendly choices in all our marble quarries and factories, while keeping quality at the forefront in production.",
    },
  ];

  return (
    <div className="home-section">
      <div className="home-section-item">
        <div className="home-section-icon">
          <Icon icon={users} size={25} />
        </div>

        <div className="home-section-info">
          <h3>{data[0].title}</h3>
          <p>{data[0].text}</p>
        </div>
      </div>

      <div className="home-section-item">
        <div className="home-section-icon">
          <Icon icon={shield} size={25} />
        </div>

        <div className="home-section-info">
          <h3>{data[1].title}</h3>
          <p>{data[1].text}</p>
        </div>
      </div>

      <div className="home-section-item">
        <div className="home-section-icon">
          <Icon icon={clockO} size={25} />
        </div>
        <div className="home-section-info">
          <h3>{data[2].title}</h3>
          <p>{data[2].text}</p>
        </div>
      </div>

      <div className="home-section-item">
        <div className="home-section-icon">
          <Icon icon={tree} size={25} />
        </div>
        <div className="home-section-info">
          <h3>{data[3].title}</h3>
          <p>{data[3].text}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
