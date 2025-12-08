import React from "react";
import classNames from "classnames/bind";
import styles from "./MessageBubble.module.scss";
import JobCardBubble from "../JobCardBubble";

const cx = classNames.bind(styles);

function MessageBubble({ message }) {
  const isMe = message.sender === "me";

return (
    <div className={cx("message-row", { me: isMe })}>
      
      {message.type === "text" && (
        <div className={cx("bubble")}>
          {message.content}
        </div>
      )}

      {message.type === "job_card" && (
        <div className={cx("job-card-wrapper")}>
           <JobCardBubble data={message.data} />
        </div>
      )}

    </div>
  );
}

export default MessageBubble;