import NavBar from "../NavBar/NavBar";
import { Container, Form } from "react-bootstrap";
// import "../../components/Settings/Settings.css";
import { useDispatch,useSelector } from "react-redux";
import { changeUsername, changeAvatar } from "../../slices/user/userSlice";
import { useEffect } from "react";


const Settings =()=>{

    /* this could be dynamic and just have REGISTER component */
    const phoneNumber = useSelector((state) => state.user.phoneNumber);
    const username = useSelector((state) => state.user.userName);
    const avatar = useSelector((state) => state.user.avatar);
    // const about = useSelector((state) => state.user.about);
    const password = useSelector((state) => state.user.password);

    const dispatch = useDispatch();

      useEffect(() => {
          getUser()
      },[])
   
    
    const getUser = async () => {

        try {
            const response = await fetch(`https://whatsapp-v1-api.herokuapp.com/users/me`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
                },

        })
        if(response.ok){
            const data = await response.json();
            dispatch(changeUsername(data.username));
            dispatch(changeAvatar(data.avatar));
            
            }
         }catch(error){
        console.log(error)
        }
    }
      

        const handleSubmit = async (e) => {
          e.preventDefault();
      
          let body = {
            phoneNumber: phoneNumber,
            password: password,
            username: username,
            avatar: avatar,
            // about: about,
          };
        try {
            
            const response = await fetch(
            "https://whatsapp-v1-api.herokuapp.com/users/account",
            {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },

                body: JSON.stringify(body),
            }
            );
            if (response.status === 201) {
            const data = await response.json();
            window.location.href = "/chat";
            }
        } catch (error) {
            console.log(error);
        }

        };
 
    //add phoneNumber as a heading 
        return (
          <>
            <NavBar />
            <Container>
              <div id="main-container2">
                <div className="login">
                  <div className="container">
                    <div className="row">
                      <Form className="formDir  text-center" onSubmit={handleSubmit}>
                        <div
                          id="imageContainer"
                          className="col-md-6 mx-auto text-center"
                        >
                          <label htmlFor="Bfile">
                            <div className="addImage">
                              <img
                                src={require("../../Data/plusM.jpg")}
                                alt="add Images"
                                className="plus"
                              />
                            </div>
                          </label>
                          <input id="Bfile" type="file" />
                        </div>
                        <div className="col-md-6 mx-auto formContainer">
                          <Form.Group
                            className="formSize mb-3 "
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Set a new user name"
                              onChange={(e) => dispatch(changeUsername(e.target.value))}
                            />
                          </Form.Group>
                          <Form.Group
                            className="formSize mb-3"
                            controlId="formBasicAvatar"
                          >
                            <Form.Label>Avatar</Form.Label>
                            <Form.Control
                              type="file"
                              placeholder="Set a new avatar"
                              onChange={(e) => dispatch(changeAvatar(e.target.value))}
                            />
                          </Form.Group>
      
                          <Form.Group
                            className=" formSize mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Set a new password"
                            //   onChange={(e) => dispatch(changePassword(e.target.value))}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                          ></Form.Group>
      
                          <button className="LoginButton" type="submit">
                            Register
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </>
        );

}


export default Settings
