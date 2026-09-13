        function mutatElrejti(elemId) {
            var elem = document.getElementById(elemId);
            
            if (elem.style.display === "block") {
                elem.style.display = "none";
            } else {
                elem.style.display = "block";
            }
        }