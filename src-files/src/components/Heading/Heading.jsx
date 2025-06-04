function Heading({className, text}) {

	if (className === "page-title") {
			return (
						<>
							<h1 className={className}>{(text !=="") && text}</h1>
						</>
		)
	}

	if (className === "inner-page__title") {
			return (
						<>
							<h1 className="inner-page__title">{text}</h1>
						</>
		)
	}
	
	if (className === "inner-page__title") {
			return (
						<>
							<h1  className={className}>{text}</h1>
						</>
		)
	}

	if (className === "page-subtitle") {
			return (
						<>
							<h2  className={className}>{text}</h2>
						</>
		)
	}

	if (className === "notice__title") {
			return (
						<>
							<h3 className="notice__title" >{text}</h3>
						</>
		)
	}


}

export default Heading
