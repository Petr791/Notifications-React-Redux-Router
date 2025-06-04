import "./Button.css"
import { Link} from "react-router-dom";
import { AvitoLogoSVG, AvitoTextSVG} from "../IconsSvg/IconsSvg"


function Button({className, text, link}) {

	if (className === "btn--avito") {
		return (
					<>
						<Link  to={`/`}  className="btn--avito">
								<div className="logo-btn-wrapper">
									<span className="logo-btn__inner"><AvitoLogoSVG /><AvitoTextSVG /></span>
								</div>
						</Link>
					</>
		)
	}


	if (className === "notice__link-wrapper") {
		return (
					<>
						<div className={className}>
							<Link  to={link}  className="notice__link">{text}</Link>
						</div>
						
					</>
		)
	}

}

export default Button