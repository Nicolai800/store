import { createPortal } from "react-dom";
import React, {useState} from "react";
import { NavLink } from "react-router-dom";

export const Modal = ({ children, onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const getClassName = ({ isActive }) => isActive ? styles.active : "";
    return createPortal(
      <div className={styles.modal}>
        <div className={styles.modalHeader} onClick={onClose}>
          <div>X</div>
          <nav className={styles.navbar}>
        <NavLink to="/" className={getClassName}>
          Main Page
        </NavLink>
        <NavLink to="/categories" className={getClassName}>
          Categories
        </NavLink>
        <NavLink to="/all-products" className={getClassName}>
          All Products
        </NavLink>
        <NavLink to="all-sales" className={getClassName}>
          All Sales
        </NavLink>
      </nav>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>,
  
      document.body
    );
  };
  