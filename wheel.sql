
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";



CREATE TABLE `doom_users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `dead` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `wheel` (`user_id`, `name`, `dead`) VALUES
(4, 'Alexandro', 0),
(5, 'Arnau', 0),
(6, 'Camilo', 0),
(7, 'Carlos', 0),
(8, 'Delfina', 0),
(9, 'Enric', 0),
(10, 'Erik', 0),
(11, 'Ferran', 0),
(12, 'Franco', 0),
(13, 'Janina', 0),
(14, 'Jason', 0),
(15, 'Kavan', 0),
(16, 'Manuela', 0),
(17, 'Nathalia', 0),
(18, 'Nellay', 0),
(19, 'Noelia', 0),
(20, 'Nuria', 0),
(21, 'Raul', 0),
(22, 'Sergi', 0),
(23, 'Shuangjie', 0),
(24, 'Unai', 0),
(25, 'Andres', 0),
(26, 'Thierry', 0);


ALTER TABLE `doom_users`
  ADD PRIMARY KEY (`user_id`);

ALTER TABLE `doom_users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

