import React from "react";
import { FaVideo, FaPhone, FaRegWindowClose } from "react-icons/fa";
const Contects = (props) => {
  const closeChat = () => {
    props.closeChat();
  };
  return (
    <>
      {props.state ? (
        <div style={{ position: "fixed", bottom: "0", right: "0%", height: "450px", minHeight: "450px",  maxHeight: "450px", background: "#ffffff",  width: "330px", borderTopLeftRadius: "7px", borderTopRightRadius: "7px", overflow: "hidden", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"}}>
          <div style={{display: "flex",padding: "15px",borderBottom: "1px solid #f0f2f5"}}>
            <div style={{width: "50%",display: "flex",alignItems: "center"}}>
              <div style={{width: "30px",height: "30px",borderRadius: "50%",overflow: "hidden"}}>
                <img
                  style={{  width: "100%",height: "100%",objectFit: "cover"}}
                  src={props.current.image ? props.current.image : ""}
                  alt="user"
                />
              </div>
              <div style={{marginLeft: "6px",fontWeight: "600"}}>
                {props.current.name ? props.current.name : ""}
              </div>
            </div>
            <div style={{ width: "50%",display: "flex",justifyContent: "flex-end"}}>
              <FaVideo style={{  margin: "10px 5px",color:"blue",cursor: "pointer"}} />
              <FaPhone style={{  margin: "10px 5px",color:"green",cursor: "pointer"}} />
              <FaRegWindowClose
                style={{  margin: "10px 5px",color:"red",cursor: "pointer"}}
                onClick={closeChat}
              />
            </div>
          </div>
          <div style={{  padding: "14px",fontSize: "14px"}}>
            <div style={{  display: "flex",justifyContent: "flex-start"}}>
              <p style={{  display: "inline-block",background: "#f0f2f5",padding: "7px",color: "#333",borderRadius: "6px",marginTop: "6px"}}>Hi,h r y?</p>
            </div>
            <div style={{  display: "flex",justifyContent: "flex-end"}}>
              <p style={{  display: "inline-block",background: "#0d8cf1",padding: "7px",color: "#fff",borderRadius: "6px",marginTop: "6px"}}>I m fine.and y?</p>
            </div>
            <div style={{  display: "flex",justifyContent: "flex-start"}}>
              <p style={{  display: "inline-block",background: "#f0f2f5",padding: "7px",color: "#333",borderRadius: "6px",marginTop: "6px"}}>
                Not doing well.
              </p>
            </div>
            <div style={{  display: "flex",justifyContent: "flex-end"}}>
              <p  style={{  display: "inline-block",background: "#0d8cf1",padding: "7px",color: "#fff",borderRadius: "6px",marginTop: "6px"}}>see ya</p>
            </div>
          </div>
          <div style={{  position: "fixed",bottom: "0px",width: "400px"}}>
            <input type="text" style={{  width: "330px",border: "none",background: "#f0f2f5",outline: "none",padding: "15px 13px"}} placeholder="Aa" />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Contects;
