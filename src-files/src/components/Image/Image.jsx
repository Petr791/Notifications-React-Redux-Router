function Image({className, imageUrl}) {

	if (className === "notice__image-wrapper") {
		return (

				<>
					<div className={className}>
							<img className="notice__image" src={imageUrl} alt="image" />
					</div>
				</>
		)
	}


}

export default Image
