import React, { useState } from "react";

const Button = () => {
    return (
        <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary active">
                <input type="checkbox" checked autocomplete="off"/> Checked
            </label>
        </div>
    )
}

export default Button;