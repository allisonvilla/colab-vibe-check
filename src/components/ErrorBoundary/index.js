import React from "react";
import Broken from "assets/broken.png";
import styles from "./styles.module.scss"


const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <img src={Broken} alt="broken_link_img" />
      Oops! Something went wrong!{" "}
      <span onClick={() => window.location.reload()} className={styles.refresh}>
        Please refresh!
      </span>
    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      info: null,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}



export default ErrorBoundary;
