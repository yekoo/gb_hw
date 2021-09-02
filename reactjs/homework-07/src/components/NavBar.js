import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const NavBar = ()=>{
    return (
        <div className="navBar">
            <div className="navBarBox">
                
                    <Link to="/">
                        <Button
                            variant="contained" 
                            color="primary">Home</Button>
                    </Link>
                
                    <Link to="/chat">
                        <Button
                            variant="contained" 
                            color="primary">
                                Chats
                        </Button>
                    </Link>

                    <Link to="/profile">
                        <Button
                            variant="contained" 
                            color="primary">
                                Profile
                            </Button>
                    </Link>
                
            </div>
  
        </div>
    )
  }