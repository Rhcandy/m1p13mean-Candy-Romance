const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Accès refusé. Utilisateur non authentifié.'
      });
    }

    if (!allowedRoles.includes(req.user.roleName)) {
      return res.status(403).json({
        success: false,
        message: 'Accès refusé. Permissions insuffisantes.'
      });
    }

    next();
  };
};

// Middleware pour vérifier si l'utilisateur est admin
const adminOnly = roleMiddleware(['super_admin','admin_centre']);

// Middleware pour vérifier si l'utilisateur est admin ou manager
const adminOrManager = roleMiddleware(['super_admin', 'admin_boutique', 'admin_centre']);

// Middleware pour vérifier si l'utilisateur est admin, manager ou user
const allRoles = roleMiddleware(['super_admin', 'admin_boutique', 'admin_centre', 'user']);

module.exports = {
  roleMiddleware,
  adminOnly,
  adminOrManager,
  allRoles
};
