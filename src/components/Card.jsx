import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, constraintsRef }) {
  // Dynamically determine the background color class based on tagColor
  const tagColorClass = data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600";

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef} whileDrag={{scale: 1.2}}
      className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-5 py-8 overflow-hidden"
    >
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 px-8">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoMdClose /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {data.tag.isopen && (
          <div className={`tag w-full ${tagColorClass} h-10 py-4 flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
