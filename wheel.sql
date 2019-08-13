
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";



CREATE TABLE `doom_users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `dead` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `doom_users` (`user_id`, `name`, `dead`) VALUES
(1, 'Alexandro', 0),
(2, 'Arnau', 0),
(3, 'Camilo', 0),
(4, 'Carlos', 0),
(5, 'Delfina', 0),
(6, 'Enric', 0),
(7, 'Erik', 0),
(8, 'Ferran', 0),
(9, 'Franco', 0),
(10, 'Janina', 0),
(11, 'Jason', 0),
(12, 'Kavan', 0),
(13, 'Manuela', 0),
(14, 'Nathalia', 0),
(15, 'Nellay', 0),
(16, 'Noelia', 0),
(17, 'Nuria', 0),
(18, 'Raul', 0),
(19, 'Sergi', 0),
(20, 'Shuangjie', 0),
(21, 'Unai', 0),
(22, 'Andres', 0),
(23, 'Thierry', 0);


ALTER TABLE `doom_users`
  ADD PRIMARY KEY (`user_id`);

ALTER TABLE `doom_users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

