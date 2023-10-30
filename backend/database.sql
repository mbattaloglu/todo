-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2023 at 02:01 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `done` int(11) NOT NULL,
  `owner_user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `title`, `description`, `done`, `owner_user_id`, `created_at`) VALUES
(1, 'Do Homeworks', 'Do math homework for tomorrow and science homework for next tuesday.', 1, 1, '2023-10-27 07:18:55'),
(2, 'Meeting at 14.00', 'Meeting about the last project', 0, 1, '2023-10-27 11:35:48'),
(3, 'Do Shopping', '-Eggs\r\n-Strawberry\r\n-Cacao Powder', 0, 2, '2023-10-27 11:36:34'),
(4, 'Clean the Room', 'Do not forget the table', 0, 1, '2023-10-30 07:42:45'),
(5, 'Add style for todo cards', 'Add a style that user can understand todo is done or not.', 0, 1, '2023-10-30 07:44:30'),
(6, 'Do Ironing', 'Red/white/black shirt, light-blue jean and yellow trousers.', 1, 1, '2023-10-30 07:57:25'),
(7, 'Write some tests to check app', 'For frontend and backend both.', 0, 1, '2023-10-30 08:08:04'),
(8, 'Go lunch at 11.50', 'To eat Iskender :)))', 0, 1, '2023-10-30 08:19:56'),
(9, 'Think some new features', 'You can do more.', 0, 2, '2023-10-30 11:17:13'),
(10, 'Done is working weird', 'Check and fix it.', 1, 2, '2023-10-30 11:18:04'),
(11, 'I think it is fixed', 'Check me as done', 1, 2, '2023-10-30 11:19:06'),
(12, 'This todo is not done', 'Then do me!', 0, 2, '2023-10-30 11:19:26');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `password`, `created_at`) VALUES
(1, 'John', 'Doe', 'a@m.com', '1', '2023-10-27 08:28:33'),
(2, 'Adam', 'Doll', 'a@g.com', '1', '2023-10-27 11:54:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
