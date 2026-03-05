import profile from "../assets/images/profile.jpg";
import Card from "./Card";

function About() {
    return (
        <Card title={<div style={{ textAlign: 'center', width: '100%' }}>About Me</div>}>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                padding: '20px' 
            }}>
                <img 
                    src={profile} 
                    alt="Profile photo" 
                    style={{ 
                        width: '180px',     
                        height: 'auto', 
                        marginBottom: '20px',
                        border: '2px solid #7dd3f7',
                        display: 'block'
                    }} 
                />
                <div>
                    <p style={{ margin: '10px 0' }}>
                        Hello! I am Joshlie Daven G. Miralles. 
                        I live in Centro Kolambog, Lapasan, Cagayan de Oro City
                        and I am 20 years old.
                    </p>
                    <p style={{ margin: '10px 0' }}>
                        I love playing computer games and hanging out with friends.
                    </p>
                </div>
            </div>
        </Card>
    );
}

export default About;