import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import styles from './styles.module.css';

class Modal extends React.Component {

  componentDidMount() {
    this.el = document.createElement('div');
    const bodyEl = document.body;
    this.modalRoot = document.getElementById('modal-root');
    if (!this.modalRoot) {
      this.modalRoot = document.createElement('div');
      this.modalRoot.setAttribute("id", "modal-root")
      bodyEl.appendChild(this.modalRoot);
    }

    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    if (!this.el) {
      return "";
    }

    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

const SiteMenuBlock = ({ isShow = false, onClose }) => {

  return (
    <Modal>
      <div className={clsx(styles.siteMenuBlock, {
        [styles.siteMenuBlockActive]: isShow,
      })}>
        <div className={styles.siteMenuBlockClose} onClick={onClose}>
          <span className={styles.top} />
          <span className={styles.bottom} />
        </div>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default SiteMenuBlock;
