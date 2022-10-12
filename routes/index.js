const router = require ("express").Router();
// Import API routes from /api/index.js 
const apiRoutes = require("./api");
// "/api" prefix added to all api routes imported from the "api" directory
router.use("/api", apiRoutes);

module.exports = router;