import { Col } from "react-bootstrap"

export const ProjectsCard = ({title, description, imgUrl,site,repository})=>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    
                    <span>{description}</span>
                    <p></p>
                    <a href={repository}>Repositório</a>
                    <p></p>
                    <a href={site}>Site</a>
                   
                    
                </div>
            </div>
        </Col>
    )
}

