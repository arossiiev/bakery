<?php

namespace App\Entity;

use App\Repository\OrderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=OrderRepository::class)
 * @ORM\Table(name="`order`")
 */
class Order
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="orders")
     */
    private $authorizedUser;

    /**
     * @ORM\ManyToOne(targetEntity=UnauthorizedUser::class, inversedBy="orders")
     */
    private $unauthorizedUser;

    /**
     * @ORM\Column(type="integer")
     */
    private $total;

    /**
     * @ORM\OneToMany(targetEntity=OrderLine::class, mappedBy="clientOrder")
     */
    private $orderLines;

    public function __construct()
    {
        $this->orderLines = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAuthorizedUser(): ?User
    {
        return $this->authorizedUser;
    }

    public function setAuthorizedUser(?User $authorizedUser): self
    {
        $this->authorizedUser = $authorizedUser;

        return $this;
    }

    public function getUnauthorizedUser(): ?UnauthorizedUser
    {
        return $this->unauthorizedUser;
    }

    public function setUnauthorizedUser(?UnauthorizedUser $unauthorizedUser): self
    {
        $this->unauthorizedUser = $unauthorizedUser;

        return $this;
    }

    public function getTotal(): ?int
    {
        return $this->total;
    }

    public function setTotal(int $total): self
    {
        $this->total = $total;

        return $this;
    }

    /**
     * @return Collection<int, OrderLine>
     */
    public function getOrderLines(): Collection
    {
        return $this->orderLines;
    }

    public function addOrderLine(OrderLine $orderLine): self
    {
        if (!$this->orderLines->contains($orderLine)) {
            $this->orderLines[] = $orderLine;
            $orderLine->setClientOrder($this);
        }

        return $this;
    }

    public function removeOrderLine(OrderLine $orderLine): self
    {
        if ($this->orderLines->removeElement($orderLine)) {
            // set the owning side to null (unless already changed)
            if ($orderLine->getClientOrder() === $this) {
                $orderLine->setClientOrder(null);
            }
        }

        return $this;
    }
}
