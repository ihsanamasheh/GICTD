<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ddmk' );

/** MySQL database username */
define( 'DB_USER', 'w2' );

/** MySQL database password */
define( 'DB_PASSWORD', 'pQGKe5sN3^Y^M!z2' );

/** MySQL hostname */
define( 'DB_HOST', '34.134.62.89' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ';K%7umQu{Ig9GL}1Ho&9ni5:d,cS82,BfXuxxbq`uz~l!hO^x8(iG`>PK1p+rjA7' );
define( 'SECURE_AUTH_KEY',  'gB<v1Pqww[ztAbvF>uXDjy`9_0dtpVN*c-xaDGu[L|,bn=K^w _`1;lQ0 o8Z3gh' );
define( 'LOGGED_IN_KEY',    'X@fJI{~qxC>?FF+y%aKj%a=f_!8?OZYRO~E{-GU$J197|JVOrpA#FV?n<hU+{Mi7' );
define( 'NONCE_KEY',        'J/%&L#~kC8i%baHqGYCP-Xu}eF;p5Q:hf!!J+pt7(lTg;n}CID:^e.RQsC2jMl&w' );
define( 'AUTH_SALT',        '-Q3=4<LEPlzg:0l2sbxtu!gSJ7#L>nX0XTKk%t-pbS/#s83S *>|Jp/s*UCZHh+6' );
define( 'SECURE_AUTH_SALT', 'GlJtpI4NaZOCU;EC<=laI}E&8YK6s HDxVHI[rzI?j1_]I@c{Y]B`8_z*-W[@:$#' );
define( 'LOGGED_IN_SALT',   '@43=w2(0*4mz}sKmx!x.$?_2UZ:d0$.OlY?!qXBdfEQB:T6fr,nFwtpZf.~lyYs6' );
define( 'NONCE_SALT',       'a=#39@<B[_2uw(Ec`,X0=#W3e5<mE*msVq!%rqFp5&>dzfH5;g,%aAyLE=Y<3]$b' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_8086716';

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
