-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 22, 2023 at 05:45 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cinemaapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `movies` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`movies`)),
  `movie` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`movie`)),
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`images`)),
  `alternative` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`alternative`)),
  `dur` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`dur`)),
  `cinem` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`cinem`)),
  `days` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`days`)),
  `time` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`time`)),
  `price` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`price`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `movies`, `movie`, `images`, `alternative`, `dur`, `cinem`, `days`, `time`, `price`) VALUES
(2, '{\"movies\":[\r\n {\"name\":\"Spider-man far from home\", \"sold\":\"20\", \"available\":\"40\"},\r\n {\"name\":\"The lion king\",\"sold\":\"10\", \"available\":\"50\"},\r\n {\"name\":\"Aladdin\", \"sold\":\"50\", \"available\":\"10\"},\r\n {\"name\":\"Angel has fallen\", \"sold\":\"5\", \"available\":\"55\"},\r\n {\"name\":\" The nightingale\", \"sold\":\"20\", \"available\":\"40\"},\r\n {\"name\":\"Once upon a time in Hollywood\", \"sold\":\"0\", \"available\":\"60\"},\r\n {\"name\":\"Fast & Furious: Hobbs & Shaw\", \"sold\":\"30\", \"available\":\"30\"},\r\n {\"name\":\"Killerman\", \"sold\":\"12\", \"available\":\"48\"}\r\n]\r\n}', '{\"movie\":[\r\n {\"type\":\"Science fiction\"},\r\n {\"type\":\"Family\"},\r\n {\"type\":\"Science fiction\"},\r\n {\"type\":\"Action\"},\r\n {\"type\":\"Mistery\"},\r\n {\"type\":\"Comedy\"},\r\n {\"type\":\"Action\"},\r\n {\"type\":\"Action\"}\r\n]}', '{\"images\":[\r\n {\"img\":\"img/spidermanfaraway.jpg\"},\r\n {\"img\":\"img/lionking.jpg\"},\r\n {\"img\":\"img/alladin.jpg\"},\r\n {\"img\":\"img/angelhasfallen.jpg\"},\r\n {\"img\":\"img/thenightingale.jpg\"},\r\n {\"img\":\"img/onceuponatimeinholly.jpg\"},\r\n {\"img\":\"img/hobbsshaw.jpg\"},\r\n {\"img\":\"img/killerman.jpg\"}\r\n]\r\n}', '{\"alternative\":[\r\n {\"alt\":\"spiderman\"},\r\n {\"alt\":\"lionking\"},\r\n {\"alt\":\"alladin\"},\r\n {\"alt\":\"angelhasfallen\"},\r\n {\"alt\":\"nightingale\"},\r\n {\"alt\":\"hollywood\"},\r\n {\"alt\":\"hobbsshaw\"},\r\n {\"alt\":\"killerman\"}\r\n]}', '{\"dur\":[\r\n {\"duration\":\"2h 9min\"},\r\n {\"duration\":\"1h 58min\"},\r\n {\"duration\":\"2h 8min\"},\r\n {\"duration\":\"2h 8min\"},\r\n {\"duration\":\"2h 16min\"},\r\n {\"duration\":\"2h 41min\"},\r\n {\"duration\":\"2h 15min\"},\r\n {\"duration\":\"2h 0min\"}\r\n]}', '{\"cinem\":[\r\n {\"hall\":\"Cinema:A\"},\r\n {\"hall\":\"Cinema:B\"},\r\n {\"hall\":\"Cinema:C\"},\r\n {\"hall\":\"Cinema:D\"},\r\n {\"hall\":\"Cinema:E\"},\r\n {\"hall\":\"Cinema:F\"},\r\n {\"hall\":\"Cinema:G\"},\r\n {\"hall\":\"Cinema:H\"}\r\n]}', '{\"days\":[\r\n {\"date\":\"Monday,12.8.2019.\"},\r\n {\"date\":\"Tuesday, 13.8.2019.\"},\r\n {\"date\":\"Wednesday, 14.8.2019.\"},\r\n {\"date\":\"Thursday,15.8.2019.\"},\r\n {\"date\":\"Friday,16.8.2019.\"},\r\n {\"date\":\"Saturday,17.8.2019.\"},\r\n {\"date\":\"Sunday, 18.8.2019.\"}\r\n\r\n]}', '{\r\n \"time\":[\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"19:23\"},\r\n {\"timeOfShow\":\"23:50\"},\r\n {\"timeOfShow\":\"10:25\"},\r\n {\"timeOfShow\":\"14:50\"},\r\n {\"timeOfShow\":\"18:00\"},\r\n {\"timeOfShow\":\"21:00\"},\r\n {\"timeOfShow\":\"00:50\"},\r\n {\"timeOfShow\":\"02:00\"},\r\n {\"timeOfShow\":\"10:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"00:00\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"19:23\"},\r\n {\"timeOfShow\":\"23:50\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"00:00\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"15:00\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"19:23\"},\r\n {\"timeOfShow\":\"23:50\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"19:23\"},\r\n {\"timeOfShow\":\"23:50\"},\r\n {\"timeOfShow\":\"21:00\"},\r\n {\"timeOfShow\":\"00:50\"},\r\n {\"timeOfShow\":\"02:00\"},\r\n {\"timeOfShow\":\"10:25\"},\r\n {\"timeOfShow\":\"14:50\"},\r\n {\"timeOfShow\":\"18:00\"},\r\n {\"timeOfShow\":\"10:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"00:00\"},\r\n {\"timeOfShow\":\"10:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"00:00\"},\r\n {\"timeOfShow\":\"10:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"00:00\"},\r\n {\"timeOfShow\":\"02:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"10:25\"},\r\n {\"timeOfShow\":\"14:50\"},\r\n {\"timeOfShow\":\"18:00\"},\r\n {\"timeOfShow\":\"10:25\"},\r\n {\"timeOfShow\":\"14:50\"},\r\n {\"timeOfShow\":\"18:00\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"19:23\"},\r\n {\"timeOfShow\":\"23:50\"},\r\n {\"timeOfShow\":\"10:25\"},\r\n {\"timeOfShow\":\"14:50\"},\r\n {\"timeOfShow\":\"18:00\"},\r\n {\"timeOfShow\":\"21:00\"},\r\n {\"timeOfShow\":\"00:50\"},\r\n {\"timeOfShow\":\"02:00\"},\r\n {\"timeOfShow\":\"10:00\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"19:23\"},\r\n {\"timeOfShow\":\"23:50\"},\r\n {\"timeOfShow\":\"10:25\"},\r\n {\"timeOfShow\":\"14:50\"},\r\n {\"timeOfShow\":\"18:00\"},\r\n {\"timeOfShow\":\"21:00\"},\r\n {\"timeOfShow\":\"00:50\"},\r\n {\"timeOfShow\":\"02:00\"},\r\n {\"timeOfShow\":\"10:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"19:23\"},\r\n {\"timeOfShow\":\"23:50\"},\r\n {\"timeOfShow\":\"10:25\"},\r\n {\"timeOfShow\":\"14:50\"},\r\n {\"timeOfShow\":\"18:00\"},\r\n {\"timeOfShow\":\"21:00\"},\r\n {\"timeOfShow\":\"00:50\"},\r\n {\"timeOfShow\":\"02:00\"},\r\n {\"timeOfShow\":\"10:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"00:00\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"19:23\"},\r\n {\"timeOfShow\":\"23:50\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"00:00\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"15:00\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"19:23\"},\r\n {\"timeOfShow\":\"23:50\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"19:23\"},\r\n {\"timeOfShow\":\"23:50\"},\r\n {\"timeOfShow\":\"10:25\"},\r\n {\"timeOfShow\":\"14:50\"},\r\n {\"timeOfShow\":\"18:00\"},\r\n {\"timeOfShow\":\"21:00\"},\r\n {\"timeOfShow\":\"00:50\"},\r\n {\"timeOfShow\":\"02:00\"},\r\n {\"timeOfShow\":\"10:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"00:00\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"19:23\"},\r\n {\"timeOfShow\":\"23:50\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"00:00\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"15:00\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"14:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"19:23\"},\r\n {\"timeOfShow\":\"23:50\"},\r\n {\"timeOfShow\":\"17:40\"},\r\n {\"timeOfShow\":\"08:00\"},\r\n {\"timeOfShow\":\"20:00\"},\r\n {\"timeOfShow\":\"14:00\"}\r\n\r\n\r\n]\r\n}', '{\r\n\"price\":[\r\n {\"fullprice\":58.25},\r\n {\"fullprice\":80.65},\r\n {\"fullprice\":60.80},\r\n {\"fullprice\":40.65},\r\n {\"fullprice\":45.00},\r\n {\"fullprice\":86.58},\r\n {\"fullprice\":55.00},\r\n {\"fullprice\":90.00}\r\n]\r\n}');

-- --------------------------------------------------------

--
-- Table structure for table `selected_movies`
--

CREATE TABLE `selected_movies` (
  `id` int(11) NOT NULL,
  `selected_movie` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`selected_movie`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `selected_movies`
--

INSERT INTO `selected_movies` (`id`, `selected_movie`) VALUES
(1, '{\"movie\":\"Angel has fallen\",\"days\":\"Monday,12.8.2019.\",\"time\":\"20:00\"}');

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `id` int(11) NOT NULL,
  `option_t` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`option_t`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`id`, `option_t`) VALUES
(1, '{\r\n  \"tickets\":[\r\n    {\"option\":\"Children 5-10 years\"},\r\n    {\"option\":\"Children 10-14 years\"},\r\n    {\"option\":\"Young adult 14-18 years\"},\r\n    {\"option\":\"Regular student 19-25 years\"},\r\n    {\"option\":\"Adult\"}\r\n  ]\r\n\r\n}\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `ticket_detail`
--

CREATE TABLE `ticket_detail` (
  `id` int(11) NOT NULL,
  `ticketdetails` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`ticketdetails`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `ticket_detail`
--

INSERT INTO `ticket_detail` (`id`, `ticketdetails`) VALUES
(1, '{\"ticketcategory\":\"Children 5-10 years\",\"ticketamount\":\"5\",\"price\":\"40.65\",\"discount\":0.75,\"total\":\"203.25\",\"seatNo\":\"1\",\"sector1\":\"Sector A\",\"sector2\":\"Sector X\"}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `selected_movies`
--
ALTER TABLE `selected_movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ticket_detail`
--
ALTER TABLE `ticket_detail`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `selected_movies`
--
ALTER TABLE `selected_movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ticket_detail`
--
ALTER TABLE `ticket_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
