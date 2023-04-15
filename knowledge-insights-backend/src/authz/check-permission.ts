// src/authz/check-permission.ts
function checkPermission(permission: string) {
  console.log(`permission: `, permission)
  return (req: any, res: any, next: any) => {
    const userPermissions = req.user.permissions;

    if (userPermissions && userPermissions.includes(permission)) {
      next(); // The user has the required permission; proceed to the next middleware
    } else {
      res.status(403).send('Forbidden: You do not have the required permission'); // The user doesn't have the required permission; send a 403 Forbidden response
    }
  };
}

export default checkPermission;
