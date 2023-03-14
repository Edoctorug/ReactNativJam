-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 27, 2023 at 04:21 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edoc`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE IF NOT EXISTS `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE IF NOT EXISTS `auth_group_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissions_group_id_b120cbf9` (`group_id`),
  KEY `auth_group_permissions_permission_id_84c5c92e` (`permission_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE IF NOT EXISTS `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  KEY `auth_permission_content_type_id_2f476e4b` (`content_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add user account', 7, 'add_useraccount'),
(26, 'Can change user account', 7, 'change_useraccount'),
(27, 'Can delete user account', 7, 'delete_useraccount'),
(28, 'Can view user account', 7, 'view_useraccount');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
CREATE TABLE IF NOT EXISTS `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$320000$xYsZgdJx4kBI2P6KCkulME$MSX5weozbw0TW39PIQ87eAehNhANw2MlT05PkgZrw7I=', '2023-02-26 16:10:53.037154', 1, 'edoctor', '', '', 'jamillutaaya0@gmail.com', 1, 1, '2023-02-26 10:38:32.224131');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
CREATE TABLE IF NOT EXISTS `auth_user_groups` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_user_id_6a12ed8b` (`user_id`),
  KEY `auth_user_groups_group_id_97559544` (`group_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
CREATE TABLE IF NOT EXISTS `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permissions_user_id_a95ead1b` (`user_id`),
  KEY `auth_user_user_permissions_permission_id_1fbb5f2c` (`permission_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE IF NOT EXISTS `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2023-02-26 16:15:33.601416', '2', 'Lutaaya', 1, '[{\"added\": {}}]', 7, 1),
(2, '2023-02-26 16:15:55.344568', '1', 'Lutaaya', 3, '', 7, 1),
(3, '2023-02-26 16:31:33.282465', '3', 'shaban', 1, '[{\"added\": {}}]', 7, 1);

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE IF NOT EXISTS `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(2, 'auth', 'permission'),
(3, 'auth', 'group'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session'),
(7, 'signapi', 'useraccount');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE IF NOT EXISTS `django_migrations` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2023-02-26 09:47:16.048867'),
(2, 'auth', '0001_initial', '2023-02-26 09:47:16.212599'),
(3, 'admin', '0001_initial', '2023-02-26 09:47:16.256679'),
(4, 'admin', '0002_logentry_remove_auto_add', '2023-02-26 09:47:16.263641'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2023-02-26 09:47:16.270478'),
(6, 'contenttypes', '0002_remove_content_type_name', '2023-02-26 09:47:16.298845'),
(7, 'auth', '0002_alter_permission_name_max_length', '2023-02-26 09:47:16.311275'),
(8, 'auth', '0003_alter_user_email_max_length', '2023-02-26 09:47:16.325487'),
(9, 'auth', '0004_alter_user_username_opts', '2023-02-26 09:47:16.330935'),
(10, 'auth', '0005_alter_user_last_login_null', '2023-02-26 09:47:16.344946'),
(11, 'auth', '0006_require_contenttypes_0002', '2023-02-26 09:47:16.346946'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2023-02-26 09:47:16.354400'),
(13, 'auth', '0008_alter_user_username_max_length', '2023-02-26 09:47:16.369368'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2023-02-26 09:47:16.382411'),
(15, 'auth', '0010_alter_group_name_max_length', '2023-02-26 09:47:16.400798'),
(16, 'auth', '0011_update_proxy_permissions', '2023-02-26 09:47:16.408754'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2023-02-26 09:47:16.422760'),
(18, 'sessions', '0001_initial', '2023-02-26 09:47:16.435796'),
(19, 'signapi', '0001_initial', '2023-02-26 16:08:54.670988'),
(20, 'signapi', '0002_rename_firstname_useraccount_firstname_and_more', '2023-02-26 16:14:21.389085'),
(21, 'signapi', '0003_rename_lastame_useraccount_lastname', '2023-02-26 16:19:07.184180');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
CREATE TABLE IF NOT EXISTS `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('yc9jfga6d3iaie0dqmrhhhjvg9dk6hck', '.eJxVjEEOwiAQAP_C2RAKhQWP3vsGArsgVQNJaU_GvxuSHvQ6M5k38-HYiz962vxK7MomdvllMeAz1SHoEeq9cWx139bIR8JP2_nSKL1uZ_s3KKGXsdUxWhAA0sBEqBAdZNIYpCMprMFZWmNAkkCpRZwdKdCCLGUjVHaKfb7LFjcd:1pWES0:TzNol7gEAu6HctJJJNPeTM9Ijj9UNIUKUvFSB3bQvAc', '2023-03-12 10:40:16.418527'),
('izdjskvmz688eoeec2zklqmd3bhe028j', '.eJxVjEEOwiAQAP_C2RAKhQWP3vsGArsgVQNJaU_GvxuSHvQ6M5k38-HYiz962vxK7MomdvllMeAz1SHoEeq9cWx139bIR8JP2_nSKL1uZ_s3KKGXsdUxWhAA0sBEqBAdZNIYpCMprMFZWmNAkkCpRZwdKdCCLGUjVHaKfb7LFjcd:1pWJbx:_R7x5Iuh7fxl_PY_J94-TTrypzgBP9nKhfIA1-Kptn8', '2023-03-12 16:10:53.037154');

-- --------------------------------------------------------

--
-- Table structure for table `signapi_useraccount`
--

DROP TABLE IF EXISTS `signapi_useraccount`;
CREATE TABLE IF NOT EXISTS `signapi_useraccount` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(200) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `role` varchar(100) NOT NULL,
  `pharmaceaticallicence` varchar(100) DEFAULT NULL,
  `operatinglicence` varchar(100) DEFAULT NULL,
  `email` varchar(200) NOT NULL,
  `phonenumber` varchar(50) NOT NULL,
  `password1` varchar(200) NOT NULL,
  `password2` varchar(200) NOT NULL,
  `dateCreated` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `signapi_useraccount`
--

INSERT INTO `signapi_useraccount` (`id`, `firstname`, `lastname`, `role`, `pharmaceaticallicence`, `operatinglicence`, `email`, `phonenumber`, `password1`, `password2`, `dateCreated`) VALUES
(3, 'shaban', 'ramadhan', 'doctor', 'pharmaceaticalLicence/Create_development_builds_-_Expo_Documentation.pdf', 'operatingLicence/21F059_-_Luyinda_Alex.pdf', 'shaban@gmail.com', '+256705559333', 'lolo', 'lolo', '2023-02-26 16:31:33.272627'),
(2, 'Lutaaya', 'jamil', 'patient', 'pharmaceaticalLicence/REGISTERED_COPY_MEMARTS.pdf', 'operatingLicence/FREE_Datacom_Certification_Training_2.pdf', 'jamillutaaya0@gmail.com', '0703635', 'nana', 'nana', '2023-02-26 16:15:33.596762');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
