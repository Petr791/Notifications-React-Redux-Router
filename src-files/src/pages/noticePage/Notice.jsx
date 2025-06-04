import React, { useEffect } from "react";
import {  useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import { loadNotice } from "./actions";
import {getNotice, getNoticeIsLoading, getNoticeIsError} from "./selectors"
import "./Notice.css"
import Preloader from "../../components/Preloader/Preloader";
import Heading from "../../components/Heading/Heading";
import Image from "../../components/Image/Image";
import Button from "../../components/Button/Button";


function NotePage() {


	const { id } = useParams();

	let notice = useSelector(getNotice);
	let noticeData = null;
	let htmlContent = null;

	let isNoticeLoading = useSelector(getNoticeIsLoading);
	let isNoticeError = useSelector(getNoticeIsError);


	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(loadNotice(id));
	}, [])

		if (notice !== null ) {
			noticeData = notice.data;
			htmlContent = notice.data.description;
		}

	return (

			<>
				<div className="back-link-wrapper">
					<Link  to={`/profile/notifications`}  className="back-link">
						← Назад
					</Link>
				</div>
				
				<div className={`notice-content ${(isNoticeLoading === false && isNoticeError === false) ? 'visible' : ''}`} >

					{(isNoticeLoading) ? <Preloader /> : <>
							{(isNoticeError) ? <> <p className="message__loading-error">Ошибка загрузки уведомления!</p> </> : 
							<>

							{(notice !== null  && notice.type === "big") && 
								<div>
									<div dangerouslySetInnerHTML={{ __html: htmlContent }} />
								</div>
							}

							{(notice !== null  && notice.type === "small") &&
								<>
										<Image
										className="notice__image-wrapper"
										imageUrl={noticeData.image.url} />

										<Heading
										className="notice__title"
										text={noticeData.title} />


										<div className="notice__desc-wrapper">
											<div dangerouslySetInnerHTML={{ __html: htmlContent }} className="notice__desc"/>
										</div>

										<Button
											className="notice__link-wrapper"
											link={noticeData.action.uri}
											text={noticeData.action.title} />
								</>
							}
							
							
						</>
							
							
						}
					</>}
					</div>
				</>
	)

}

export default  NotePage

