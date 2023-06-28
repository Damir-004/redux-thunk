import React from "react";
interface IUserProps {
  item: any;
}
const User: React.FC<IUserProps> = ({ item }) => {
  return (
    <li>
      <a target={item.html_url} href={item.html_url}>
        {item.name}
      </a>
    </li>
  );
};

export default User;
