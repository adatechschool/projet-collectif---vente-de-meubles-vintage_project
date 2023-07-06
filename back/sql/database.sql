-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 06 juil. 2023 à 11:41
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `vente_meubles`
--
CREATE DATABASE IF NOT EXISTS `vente_meubles` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `vente_meubles`;

-- --------------------------------------------------------

--
-- Structure de la table `adresse`
--

CREATE TABLE `adresse` (
  `adresse` varchar(255) NOT NULL,
  `CP` int(11) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `id_adresse` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id_categorie` int(11) NOT NULL,
  `nom_categorie` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id_categorie`, `nom_categorie`) VALUES
(1, 'chaise'),
(2, 'chaise');

-- --------------------------------------------------------

--
-- Structure de la table `meubles`
--

CREATE TABLE `meubles` (
  `id_meuble` int(11) NOT NULL,
  `nom` varchar(155) NOT NULL,
  `description` text NOT NULL,
  `disponibilite` tinyint(1) NOT NULL,
  `hauteur` int(11) DEFAULT NULL,
  `largeur` int(11) DEFAULT NULL,
  `longueur` int(11) DEFAULT NULL,
  `prix` float NOT NULL,
  `FK_id_categorie` int(11) NOT NULL,
  `FK_id_panier` int(11) NOT NULL,
  `FK_id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE `panier` (
  `id_panier` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `photo_meubles`
--

CREATE TABLE `photo_meubles` (
  `id_photo` int(11) NOT NULL,
  `photo` blob NOT NULL,
  `FK_id_meuble` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `testmeubles`
--

CREATE TABLE `testmeubles` (
  `id` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `prix` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `photo` text DEFAULT NULL,
  `hauteur` int(11) DEFAULT NULL,
  `largeur` int(11) DEFAULT NULL,
  `longueur` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `testmeubles`
--

INSERT INTO `testmeubles` (`id`, `titre`, `prix`, `description`, `photo`, `hauteur`, `largeur`, `longueur`) VALUES
(3, 'Chaise haute', 10, 'La chaise Ross revisite les codes du design des années 70.\r\nCette chaise en bois et tissu dispose d\'accoudoirs. Elle adopte un look bicolore et bimatière. Confortable et résistante, la chaise Ross possède un dossier incurvé. ', 'chaise_haute.jpeg', 100, 30, 40),
(9, 'Bureau', 150, 'Un beau bureau pour travailler ', 'try_bureau.jpg', NULL, NULL, NULL),
(10, 'Lampe', 20, 'Lampe vintage qui saura éclairer quand on appuie sur le bouton', 'try_lamp.jpg', NULL, NULL, NULL),
(11, 'Lot de chaises', 40, '3 chaises, validées quand il y a trop de monde à table', 'tryChaise.jpg', NULL, NULL, NULL),
(12, 'Panier ', 10, 'Panier à plante ou à linge sale c\'est selon', 'try_panier.jpg', NULL, NULL, NULL),
(13, 'Table à manger', 80, 'Belle table, beaucoup de chaises nécessaires', 'try_table.jpg', NULL, NULL, NULL),
(14, 'Tv ', 30, 'Spoiler, elle ne marche plus mais ça peut faire un style', 'try_tv.jpg', NULL, NULL, NULL),
(15, 'Table de chevet', 250, 'Une table au poil', 'table_chevet.jpeg', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `test_users`
--

CREATE TABLE `test_users` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mdp` varchar(200) NOT NULL,
  `statut` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `test_users`
--

INSERT INTO `test_users` (`id`, `nom`, `prenom`, `email`, `mdp`, `statut`) VALUES
(73, 'admin', 'laureline', 'admin@admin.com', '$2b$10$d8SUITb45t2fbC2o5WmUmukfs42NiBTmyVjWqK0RZYxXTlFq7EIsS', 0),
(74, 'client', 'maxime', 'client@client.com', '$2b$10$pJR/xofOWEQGED.GNnPt7uFKu7bRmyf1TRr9oPwrD.QiDeYHb3pOm', 0),
(75, 'user', 'user', 'user@mail.com', '$2b$10$g5lQwufZkJFdEoQy8MD/u.p0PwLET4v1Z/SQ32sb32nzIii34eSI.', 0);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mdp` varchar(200) NOT NULL,
  `statut` tinyint(1) NOT NULL,
  `FK_id_adresse` int(11) NOT NULL,
  `FK_id_panier` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adresse`
--
ALTER TABLE `adresse`
  ADD PRIMARY KEY (`id_adresse`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_categorie`);

--
-- Index pour la table `meubles`
--
ALTER TABLE `meubles`
  ADD PRIMARY KEY (`id_meuble`),
  ADD KEY `FK_id_categorie` (`FK_id_categorie`),
  ADD KEY `FK_id_panier` (`FK_id_panier`),
  ADD KEY `FK_id_user` (`FK_id_user`);

--
-- Index pour la table `panier`
--
ALTER TABLE `panier`
  ADD PRIMARY KEY (`id_panier`);

--
-- Index pour la table `photo_meubles`
--
ALTER TABLE `photo_meubles`
  ADD PRIMARY KEY (`id_photo`),
  ADD KEY `FK_id_meuble` (`FK_id_meuble`);

--
-- Index pour la table `testmeubles`
--
ALTER TABLE `testmeubles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `test_users`
--
ALTER TABLE `test_users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_adresse` (`FK_id_adresse`),
  ADD KEY `FK_id_panier` (`FK_id_panier`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `adresse`
--
ALTER TABLE `adresse`
  MODIFY `id_adresse` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id_categorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `meubles`
--
ALTER TABLE `meubles`
  MODIFY `id_meuble` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `panier`
--
ALTER TABLE `panier`
  MODIFY `id_panier` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `photo_meubles`
--
ALTER TABLE `photo_meubles`
  MODIFY `id_photo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `testmeubles`
--
ALTER TABLE `testmeubles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `test_users`
--
ALTER TABLE `test_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `meubles`
--
ALTER TABLE `meubles`
  ADD CONSTRAINT `meubles_ibfk_1` FOREIGN KEY (`FK_id_categorie`) REFERENCES `categories` (`id_categorie`),
  ADD CONSTRAINT `meubles_ibfk_2` FOREIGN KEY (`FK_id_panier`) REFERENCES `panier` (`id_panier`),
  ADD CONSTRAINT `meubles_ibfk_3` FOREIGN KEY (`FK_id_user`) REFERENCES `users` (`id_user`);

--
-- Contraintes pour la table `photo_meubles`
--
ALTER TABLE `photo_meubles`
  ADD CONSTRAINT `photo_meubles_ibfk_1` FOREIGN KEY (`FK_id_meuble`) REFERENCES `meubles` (`id_meuble`);

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`FK_id_adresse`) REFERENCES `adresse` (`id_adresse`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`FK_id_panier`) REFERENCES `panier` (`id_panier`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
