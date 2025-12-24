import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    const distanceFromCenter = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2);
    const threshold = 200;

    if (distanceFromCenter > threshold) {
      onSendToBack();
    }
  }

  const isDisabled = disableDrag ? {} : {
    drag: true,
    dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
    dragElastic: 0.16,
    onDragEnd: handleDragEnd,
    style: { x, y, rotateX, rotateY, cursor: 'grab' }
  };

  return (
    <motion.div
      className="card"
      {...isDisabled}
      whileTap={{ cursor: 'grabbing' }}
    >
      {children}
    </motion.div>
  );
}

function Stack({
  className = '',
  onCardClick,
  sensitivity = 1,
  disableDrag = false,
  children,
  variant = 'gallery' // 'gallery' or 'skills'
}) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (children && Array.isArray(children)) {
      const childrenArray = children.map((child, index) => ({
        id: index,
        content: child,
      }));
      setCards(childrenArray);
    }
  }, [children]);

  const sendToBack = (cardId) => {
    setCards(prev => {
      const newCards = [...prev];
      const cardIndex = newCards.findIndex(card => card.id === cardId);
      if (cardIndex > -1) {
        const [card] = newCards.splice(cardIndex, 1);
        newCards.unshift(card);
      }
      return newCards;
    });
  };

  const stackVariants = {
    gallery: {
      containerClass: "relative w-full h-96",
      cardClass: "absolute inset-0 w-full h-full rounded-lg shadow-lg cursor-pointer"
    },
    skills: {
      containerClass: "relative w-20 h-20",
      cardClass: "absolute inset-0 w-full h-full rounded-lg shadow-lg cursor-pointer"
    }
  };

  const currentVariant = stackVariants[variant] || stackVariants.gallery;

  return (
    <div className={`${currentVariant.containerClass} ${className}`}>
      {cards.map((card, index) => (
        <CardRotate
          key={card.id}
          onSendToBack={() => sendToBack(card.id)}
          sensitivity={sensitivity}
          disableDrag={disableDrag}
        >
          <div
            className={currentVariant.cardClass}
            style={{
              zIndex: cards.length - index,
              scale: 1 - index * 0.05,
            }}
            onClick={() => onCardClick && onCardClick(card.id, card.content)}
          >
            {card.content}
          </div>
        </CardRotate>
      ))}
    </div>
  );
}

export default Stack;