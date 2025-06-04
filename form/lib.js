import { BACKEND_URL as _0xabc123 } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
    const _0xf1 = document.querySelectorAll("form");

    _0xf1.forEach((_0xf2) => {
        _0xf2.addEventListener("submit", async (_0xe) => {
            _0xe.preventDefault();

            let _0xendpoint = "";
            if (_0xf2.classList.contains("elementor-form")) {
                _0xendpoint = `${_0xabc123}/submit-job-application`;
            }

            const _0xf3 = new FormData(_0xf2);
            const _0xf4 = {};

            _0xf3.forEach((v, k) => {
                if (_0xf4[k]) {
                    if (Array.isArray(_0xf4[k])) {
                        _0xf4[k].push(v);
                    } else {
                        _0xf4[k] = [_0xf4[k], v];
                    }
                } else {
                    _0xf4[k] = v;
                }
            });

            let _0xf5 = _0xf2.classList.contains("elementor-form");
            let _0xf6 = {
                method: "POST",
                body: _0xf5 ? _0xf3 : JSON.stringify(_0xf4),
                headers: _0xf5 ? {} : { "Content-Type": "application/json" },
            };

            try {
                const _0xf7 = await fetch(_0xendpoint, _0xf6);
                const _0xf8 = await _0xf7.json();

                if (_0xf8.success && _0xf8.redirect) {
                    window.location.href = _0xf8.redirect;
                } else {
                    alert("Error: " + (_0xf8.error || "Something went wrong"));
                }
            } catch (_0xf9) {
                console.error("Form Submission Error:", _0xf9);
                alert("❌ Something went wrong! Please try again.");
            }
        });
    });
});
