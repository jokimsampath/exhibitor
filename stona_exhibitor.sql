-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2022 at 08:19 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stona_exhibitor`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertisement`
--

CREATE TABLE `advertisement` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `_001` tinyint(1) DEFAULT 0,
  `_002` tinyint(1) DEFAULT 0,
  `_003` tinyint(1) DEFAULT 0,
  `_004` tinyint(1) DEFAULT 0,
  `_005` tinyint(1) DEFAULT 0,
  `_006` tinyint(1) DEFAULT 0,
  `_007` tinyint(1) DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `advertisement`
--

INSERT INTO `advertisement` (`id`, `user_id`, `_001`, `_002`, `_003`, `_004`, `_005`, `_006`, `_007`, `status`) VALUES
(1, 32, 1, 1, 0, 0, 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `audiovisual`
--

CREATE TABLE `audiovisual` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `_001` tinyint(1) DEFAULT 0,
  `_002` tinyint(1) DEFAULT 0,
  `_003` tinyint(1) DEFAULT 0,
  `_004` tinyint(1) DEFAULT 0,
  `_005` tinyint(1) DEFAULT 0,
  `_006` tinyint(1) DEFAULT 0,
  `_007` tinyint(1) DEFAULT 0,
  `_008` tinyint(1) DEFAULT 0,
  `_009` tinyint(1) DEFAULT 0,
  `_010` tinyint(1) DEFAULT 0,
  `_011` tinyint(1) DEFAULT 0,
  `_012` tinyint(1) DEFAULT 0,
  `_014` tinyint(1) DEFAULT 0,
  `_013` tinyint(1) DEFAULT 0,
  `_015` tinyint(1) DEFAULT 0,
  `_016` tinyint(1) DEFAULT 0,
  `_017` tinyint(1) DEFAULT 0,
  `_018` tinyint(1) DEFAULT 0,
  `_019` tinyint(1) DEFAULT 0,
  `_020` tinyint(1) DEFAULT 0,
  `_021` tinyint(1) DEFAULT 0,
  `_022` tinyint(1) DEFAULT 0,
  `_023` tinyint(1) DEFAULT 0,
  `_024` tinyint(1) DEFAULT 0,
  `_025` tinyint(1) DEFAULT 0,
  `_026` tinyint(1) DEFAULT 0,
  `_027` tinyint(1) DEFAULT 0,
  `_028` tinyint(1) DEFAULT 0,
  `_029` tinyint(1) DEFAULT 0,
  `_030` tinyint(1) DEFAULT 0,
  `_031` tinyint(1) DEFAULT 0,
  `_032` tinyint(1) DEFAULT 0,
  `_033` tinyint(1) DEFAULT 0,
  `_034` tinyint(1) DEFAULT 0,
  `_035` tinyint(1) DEFAULT 0,
  `_036` tinyint(1) DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `audiovisual`
--

INSERT INTO `audiovisual` (`id`, `user_id`, `_001`, `_002`, `_003`, `_004`, `_005`, `_006`, `_007`, `_008`, `_009`, `_010`, `_011`, `_012`, `_014`, `_013`, `_015`, `_016`, `_017`, `_018`, `_019`, `_020`, `_021`, `_022`, `_023`, `_024`, `_025`, `_026`, `_027`, `_028`, `_029`, `_030`, `_031`, `_032`, `_033`, `_034`, `_035`, `_036`, `status`) VALUES
(2, 32, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `brandingsponsorship`
--

CREATE TABLE `brandingsponsorship` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `_001` tinyint(1) DEFAULT 0,
  `_002` tinyint(1) DEFAULT 0,
  `_003` tinyint(1) DEFAULT 0,
  `_004` tinyint(1) DEFAULT 0,
  `_005` tinyint(1) DEFAULT 0,
  `_005a` tinyint(1) DEFAULT 0,
  `_006` tinyint(1) DEFAULT 0,
  `_007` tinyint(1) DEFAULT 0,
  `_008` tinyint(1) DEFAULT 0,
  `_009` tinyint(1) DEFAULT 0,
  `_010` tinyint(1) DEFAULT 0,
  `_011` tinyint(1) DEFAULT 0,
  `_012` tinyint(1) DEFAULT 0,
  `_014` tinyint(1) DEFAULT 0,
  `_013` tinyint(1) DEFAULT 0,
  `_015` tinyint(1) DEFAULT 0,
  `_016` tinyint(1) DEFAULT 0,
  `_017` tinyint(1) DEFAULT 0,
  `_018` tinyint(1) DEFAULT 0,
  `_019` tinyint(1) DEFAULT 0,
  `_020` tinyint(1) DEFAULT 0,
  `_021` tinyint(1) DEFAULT 0,
  `_022` tinyint(1) DEFAULT 0,
  `_023` tinyint(1) DEFAULT 0,
  `_024` tinyint(1) DEFAULT 0,
  `_025` tinyint(1) DEFAULT 0,
  `_026` tinyint(1) DEFAULT 0,
  `_027` tinyint(1) DEFAULT 0,
  `_028` tinyint(1) DEFAULT 0,
  `_029` tinyint(1) DEFAULT 0,
  `_030` tinyint(1) DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `brandingsponsorship`
--

INSERT INTO `brandingsponsorship` (`id`, `user_id`, `_001`, `_002`, `_003`, `_004`, `_005`, `_005a`, `_006`, `_007`, `_008`, `_009`, `_010`, `_011`, `_012`, `_014`, `_013`, `_015`, `_016`, `_017`, `_018`, `_019`, `_020`, `_021`, `_022`, `_023`, `_024`, `_025`, `_026`, `_027`, `_028`, `_029`, `_030`, `status`) VALUES
(1, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
(2, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
(3, 32, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
(4, 32, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `fascia`
--

CREATE TABLE `fascia` (
  `id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `fasciaName` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `fascia`
--

INSERT INTO `fascia` (`id`, `user_id`, `fasciaName`, `status`) VALUES
(54, 32, 'jokim', 0),
(55, 32, 'jokim', 1);

-- --------------------------------------------------------

--
-- Table structure for table `furnitureelectricalfixture`
--

CREATE TABLE `furnitureelectricalfixture` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `_001` tinyint(1) DEFAULT 0,
  `_002` tinyint(1) DEFAULT 0,
  `_003` tinyint(1) DEFAULT 0,
  `_004` tinyint(1) DEFAULT 0,
  `_005` tinyint(1) DEFAULT 0,
  `_006` tinyint(1) DEFAULT 0,
  `_007` tinyint(1) DEFAULT 0,
  `_008` tinyint(1) DEFAULT 0,
  `_009` tinyint(1) DEFAULT 0,
  `_010` tinyint(1) DEFAULT 0,
  `_011` tinyint(1) DEFAULT 0,
  `_012` tinyint(1) DEFAULT 0,
  `_013` tinyint(1) DEFAULT 0,
  `_014` tinyint(1) DEFAULT 0,
  `_015` tinyint(1) DEFAULT 0,
  `_016` tinyint(1) DEFAULT 0,
  `_017` tinyint(1) DEFAULT 0,
  `_018` tinyint(1) DEFAULT 0,
  `_019` tinyint(1) DEFAULT 0,
  `_020` tinyint(1) DEFAULT 0,
  `_021` tinyint(1) DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `furnitureelectricalfixture`
--

INSERT INTO `furnitureelectricalfixture` (`id`, `user_id`, `_001`, `_002`, `_003`, `_004`, `_005`, `_006`, `_007`, `_008`, `_009`, `_010`, `_011`, `_012`, `_013`, `_014`, `_015`, `_016`, `_017`, `_018`, `_019`, `_020`, `_021`, `status`) VALUES
(3, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `exhibitorName` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirmPassword` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `user_id`, `exhibitorName`, `address`, `city`, `state`, `country`, `telephone`, `email`, `mobile`, `name`, `password`, `confirmPassword`, `status`) VALUES
(16, 32, 'sampath', 'Bengaluru', 'Bengaluru', 'Karnataka', 'India', '1234567890', 'jokim.lute@gmail.com', '9986991606', 'jokim', 'jokims', 'jokims', 0);

-- --------------------------------------------------------

--
-- Table structure for table `sponsorshipopportunities`
--

CREATE TABLE `sponsorshipopportunities` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `VisitorsBags` tinyint(1) DEFAULT 0,
  `BrandedPens` tinyint(1) DEFAULT 0,
  `ExhibitorsKits` tinyint(1) DEFAULT 0,
  `Lanyard` tinyint(1) DEFAULT 0,
  `Signage` tinyint(1) DEFAULT 0,
  `Seminar` tinyint(1) DEFAULT 0,
  `InformationBooths` tinyint(1) DEFAULT 0,
  `WaterBooths` tinyint(1) DEFAULT 0,
  `GolfCarts` tinyint(1) DEFAULT 0,
  `AdvertisementFairGuide` tinyint(1) DEFAULT 0,
  `SponsorshipCdPenDrive` tinyint(1) DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `sponsorshipopportunities`
--

INSERT INTO `sponsorshipopportunities` (`id`, `user_id`, `VisitorsBags`, `BrandedPens`, `ExhibitorsKits`, `Lanyard`, `Signage`, `Seminar`, `InformationBooths`, `WaterBooths`, `GolfCarts`, `AdvertisementFairGuide`, `SponsorshipCdPenDrive`, `status`) VALUES
(4, 32, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
(5, 32, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1),
(6, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` varchar(255) NOT NULL DEFAULT 'false',
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `admin`, `status`) VALUES
(32, 'jokim.lute@gmail.com', 'jokims', 'false', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisement`
--
ALTER TABLE `advertisement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `audiovisual`
--
ALTER TABLE `audiovisual`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `brandingsponsorship`
--
ALTER TABLE `brandingsponsorship`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `fascia`
--
ALTER TABLE `fascia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fascia_ibfk_1` (`user_id`);

--
-- Indexes for table `furnitureelectricalfixture`
--
ALTER TABLE `furnitureelectricalfixture`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `sponsorshipopportunities`
--
ALTER TABLE `sponsorshipopportunities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisement`
--
ALTER TABLE `advertisement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `audiovisual`
--
ALTER TABLE `audiovisual`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `brandingsponsorship`
--
ALTER TABLE `brandingsponsorship`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fascia`
--
ALTER TABLE `fascia`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `furnitureelectricalfixture`
--
ALTER TABLE `furnitureelectricalfixture`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `sponsorshipopportunities`
--
ALTER TABLE `sponsorshipopportunities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `advertisement`
--
ALTER TABLE `advertisement`
  ADD CONSTRAINT `advertisement_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `audiovisual`
--
ALTER TABLE `audiovisual`
  ADD CONSTRAINT `audiovisual_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `brandingsponsorship`
--
ALTER TABLE `brandingsponsorship`
  ADD CONSTRAINT `brandingsponsorship_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `fascia`
--
ALTER TABLE `fascia`
  ADD CONSTRAINT `fascia_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `furnitureelectricalfixture`
--
ALTER TABLE `furnitureelectricalfixture`
  ADD CONSTRAINT `furnitureelectricalfixture_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `registration`
--
ALTER TABLE `registration`
  ADD CONSTRAINT `registration_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `sponsorshipopportunities`
--
ALTER TABLE `sponsorshipopportunities`
  ADD CONSTRAINT `sponsorshipopportunities_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
