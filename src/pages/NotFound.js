import img from "../images/undraw_lost_re_xqjt.svg";
import styles from "../pages/NotFound.module.css";
const NotFound = () => {
	return (
		<div className={styles.parent}>
			<div className={styles.box}>
				<img src={img} alt="Not Found" />
				<h2>Page Not Found</h2>
			</div>
		</div>
	);
};

export default NotFound;
