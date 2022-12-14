import { motion } from 'framer-motion'

export default function JoinUs() {
  const motions = {
    hidden: {
      x: 800,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
      }
    },
  }

  return (
    <motion.div className="space-y-9"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 1}}
      transition={{staggerChildren: 0.2}}
    >
    <motion.h2 className="block-title" variants={motions}>加入我們</motion.h2>
    <motion.p className="block-description text-description" variants={motions}>
        我們歡迎任何科系的同學們加入到電腦學會的大家庭，讓學會融合更多元的想法和創造力，與各個內閣一起構思、實現吸引且有益的活動。利用有限的資源創造出對社會有價值的事。
    </motion.p>
    <motion.p className="block-description text-description" variants={motions}>
        除此之外，我們也積極地組織開發小組，希望通過使用基礎和貼近最前緣的電腦技術與協同開發實用的項目，令各個成員都能夠實現自我成長。甚至一起創建一個對電腦技術有興趣的本地社群。
    </motion.p>
</motion.div>
  )
}
