import profile from "../assets/images/profile.jpg";

function About() {
    return (<section className="head">
            <h2>About Me</h2>
            <img src={profile} alt="Profile photo" />
            <p>
                Hello! I am Joshlie Daven G. Miralles. 
                I live in Centro Kolambog, Lapasan, Cagayan de Oro City 
                and I am 20 years old.
            </p>
            <p>
                I love playing computer games and hanging out with friends.
            </p>
        </section>
    );
}

export default About;