import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

function Counter() {
  // let like=10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div>
      {/* onclick-camelcase */}
      <IconButton
        color="primary"
        aria-label="Like"
        onClick={() => setLike(like + 1)}
      >
        <Badge badgeContent={like} color="primary">
          <span role="img" aria-label="dislike">
            &#128077;
          </span>
        </Badge>
      </IconButton>

      <IconButton
        color="primary"
        aria-label="Dislike"
        onClick={() => setDislike(dislike + 1)}
      >
        <Badge badgeContent={dislike} color="error">
          <span role="img" aria-label="dislike">
            &#128078;
          </span>
        </Badge>
      </IconButton>
    </div>
  );
}

export default Counter;
