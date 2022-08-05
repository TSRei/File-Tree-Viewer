import React, { useState } from "react";

function App() {
  return (
    <>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="symphony_no_9.mp3" />
          <File name="twinkle_twinkle_little_star.mp3" />
        </Folder>
        <File name="dogs.jpg" />
        <File name="cats.png" />
      </Folder>
      <Folder name="Applications" />
    </>
  );
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, children } = props;
  const indent = { marginLeft: "24px" };
  const folderStatus = isOpen ? "folder open" : "folder";

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <span onClick={handleClick}>
        <i className={`blue ${folderStatus} icon`}></i>
      </span>
      {name}
      <div style={indent}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split(".")[1];
  const fileIcons = {
    mp3: "music icon",
    jpg: "file image icon",
    png: "file image outline icon",
  };

  return (
    <div>
      <i className={`${fileIcons[fileExtension]}`}></i>
      {name}
    </div>
  );
};

export default App;
