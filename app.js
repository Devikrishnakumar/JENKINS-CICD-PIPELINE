const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        application: "Jenkins CI/CD Demo",
        message: "Application deployed successfully"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;