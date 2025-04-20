import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiArrowRight, FiHome, FiBarChart2, FiPieChart } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (menu) => {
    if (typeof selected === 'number' && typeof menu === 'number') {
      setDir(selected > menu ? 'r' : 'l');
    } else if (menu === null) {
      setDir(null);
    }
    setSelected(selected === menu ? null : menu);
  };

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-10xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/home">
            <img src="./DevDisplay ICON.png" alt="DevDisplay" className="h-16 w-16" />
          </a>
        </div>
      </div>
    </nav>
  );
};


const Bridge = () => <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />;

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById('overlay-content');

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%)',
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};
export default Navbar;
