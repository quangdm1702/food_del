import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category, setCategory}) => {




  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes.Our
        mission is to satisfy your cravings and elevate your dining experience,
        on delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
              {/* logic đoạn code này : check trạng thái category(prev) với item.menu_name nếu prev category === item.menu_name thì category sẽ là All còn không thì lấy đc tên của item.menu_name , khi lấy đc tên món thì css cho ảnh có class active còn All thì không css theo class active */}
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
