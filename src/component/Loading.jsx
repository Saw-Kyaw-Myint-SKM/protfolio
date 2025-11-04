import { Loader } from "lucide-react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
} from "framer-motion";

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="text-green-400 mb-4"
        >
          <Loader size={64} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-green-300 font-mono text-lg"
        >
          Initializing developer environment...
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 2, delay: 1 }}
          className="h-1 bg-green-400/30 mx-auto mt-4 rounded-full overflow-hidden"
        >
          <motion.div
            animate={{ width: "100%" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="h-full bg-green-400"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
