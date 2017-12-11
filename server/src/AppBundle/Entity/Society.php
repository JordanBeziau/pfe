<?php

namespace AppBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * Society
 *
 * @ORM\Table(name="society")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\SocietyRepository")
 * @ApiResource()
 */
class Society
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="society_code", type="string", length=255, unique=true)
     */
    private $societyCode;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, unique=true)
     */
    private $name;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set societyCode
     *
     * @param string $societyCode
     *
     * @return Society
     */
    public function setSocietyCode($societyCode)
    {
        $this->societyCode = $societyCode;

        return $this;
    }

    /**
     * Get societyCode
     *
     * @return string
     */
    public function getSocietyCode()
    {
        return $this->societyCode;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Society
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }
}

