<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'Noyama');

/** Database username */
define('DB_USER', 'wordpress');

/** Database password */
define('DB_PASSWORD', 'wordpress');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');
define('FS_METHOD', 'direct');
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'mPX. Q/t%=y5N$|5LOJ6}YSS()u~7tC{JMP=od%J5Y.Y? ;v)h{}=A$<oQdUa=rx');
define('SECURE_AUTH_KEY',  'YG}X;DgSDa>^2@V6#F[/}[4o+C`s:`uRJ,C4h|;HQc<tsuiSifZ4OByK903:%<xL');
define('LOGGED_IN_KEY',    '=Ii,AuLD1[)gz3ZL+]%5zUIG3T-gJaPQfQ^@p)ZCq9sPo=<ux6%TcO=l{CmRtpq~');
define('NONCE_KEY',        '*:fBFDQ],+$IK&tW^Gk~6Ys<a }g,YrLj5:]_$dhB?S[kR>ey;_Q<Eh.c9K`W6H9');
define('AUTH_SALT',        'NX/LrLi)G6#a|(5k1Fr8O~H,tI2+$_]n{r``?hDO;Rz_EYa=qhpxp6<K7%z6EFVT');
define('SECURE_AUTH_SALT', 'R__=k)OB!o,){PNZYYzW^rG*rln4ZJhx>T[v,_Y.5U#_h>V[KK^#vozV~[Esx:.&');
define('LOGGED_IN_SALT',   '51gDTNvQrV%=qlJA;Abk0-x6L3nMTzO?ytLcP|,;!$q|P{|5Kq+4u[pHeT[iOlgP');
define('NONCE_SALT',       '*V#>qFcuL1n2bLZ!{5g0q)PJoR9%QJWe$ A[T@GVla:88C.v4R>QbusRnHppN0p(');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
